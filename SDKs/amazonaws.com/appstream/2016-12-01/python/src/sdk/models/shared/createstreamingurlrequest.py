import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateStreamingURLRequest:
    fleet_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetName') }})
    stack_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackName') }})
    user_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    application_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    session_context: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SessionContext') }})
    validity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Validity') }})
    
