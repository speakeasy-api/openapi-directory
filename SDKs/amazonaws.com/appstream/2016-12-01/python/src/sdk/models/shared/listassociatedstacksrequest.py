import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ListAssociatedStacksRequest:
    fleet_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetName') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
