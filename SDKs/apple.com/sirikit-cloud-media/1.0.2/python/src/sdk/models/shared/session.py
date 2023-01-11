import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import constraints as shared_constraints
from ..shared import playercontext as shared_playercontext


@dataclass_json
@dataclasses.dataclass
class Session:
    constraints: shared_constraints.Constraints = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    deadline: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deadline'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    requested: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requested'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    player_context: Optional[shared_playercontext.PlayerContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playerContext') }})
    
