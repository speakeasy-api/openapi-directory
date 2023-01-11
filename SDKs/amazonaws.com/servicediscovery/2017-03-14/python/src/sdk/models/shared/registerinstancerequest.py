import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RegisterInstanceRequest:
    attributes: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    instance_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    service_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceId') }})
    creator_request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatorRequestId') }})
    
