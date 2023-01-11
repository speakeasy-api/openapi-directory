import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import executionparameter as shared_executionparameter


@dataclass_json
@dataclasses.dataclass
class DescribeServiceActionExecutionParametersOutput:
    service_action_parameters: Optional[list[shared_executionparameter.ExecutionParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceActionParameters') }})
    
