import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import interaction_group_enum as shared_interaction_group_enum


@dataclass_json
@dataclasses.dataclass
class InteractionLimitResponse:
    r"""InteractionLimitResponse
    Interaction limit settings.
    """
    
    expires_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    limit: shared_interaction_group_enum.InteractionGroupEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    origin: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    
