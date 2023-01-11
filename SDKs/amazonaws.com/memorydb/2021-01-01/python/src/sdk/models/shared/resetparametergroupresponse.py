import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import parametergroup as shared_parametergroup


@dataclass_json
@dataclasses.dataclass
class ResetParameterGroupResponse:
    parameter_group: Optional[shared_parametergroup.ParameterGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterGroup') }})
    
