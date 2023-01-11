import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rule as shared_rule


@dataclass_json
@dataclasses.dataclass
class CreateDevicePoolRequest:
    r"""CreateDevicePoolRequest
    Represents a request to the create device pool operation.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    project_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectArn') }})
    rules: list[shared_rule.Rule] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    max_devices: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDevices') }})
    
