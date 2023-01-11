import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import functioncodelocation as shared_functioncodelocation
from ..shared import functionconfiguration as shared_functionconfiguration


@dataclass_json
@dataclasses.dataclass
class GetFunctionResponse:
    r"""GetFunctionResponse
    This response contains the object for AWS Lambda function location (see <a>API_FunctionCodeLocation</a>
    """
    
    code: Optional[shared_functioncodelocation.FunctionCodeLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    configuration: Optional[shared_functionconfiguration.FunctionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configuration') }})
    
