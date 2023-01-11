import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ResetParameterGroupRequest:
    parameter_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterGroupName') }})
    all_parameters: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllParameters') }})
    parameter_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterNames') }})
    
