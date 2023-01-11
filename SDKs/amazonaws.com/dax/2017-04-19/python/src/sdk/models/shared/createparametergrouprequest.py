import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateParameterGroupRequest:
    parameter_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterGroupName') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
