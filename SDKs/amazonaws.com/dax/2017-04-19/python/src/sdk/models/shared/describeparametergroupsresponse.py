import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import parametergroup as shared_parametergroup


@dataclass_json
@dataclasses.dataclass
class DescribeParameterGroupsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    parameter_groups: Optional[list[shared_parametergroup.ParameterGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterGroups') }})
    
