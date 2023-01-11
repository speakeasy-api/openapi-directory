import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import routingstrategy as shared_routingstrategy


@dataclass_json
@dataclasses.dataclass
class UpdateAliasInput:
    r"""UpdateAliasInput
    Represents the input for a request operation.
    """
    
    alias_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AliasId') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    routing_strategy: Optional[shared_routingstrategy.RoutingStrategy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoutingStrategy') }})
    
