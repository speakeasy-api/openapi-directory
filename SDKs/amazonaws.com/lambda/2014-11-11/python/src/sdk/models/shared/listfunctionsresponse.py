import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import functionconfiguration as shared_functionconfiguration


@dataclass_json
@dataclasses.dataclass
class ListFunctionsResponse:
    r"""ListFunctionsResponse
    Contains a list of AWS Lambda function configurations (see <a>API_FunctionConfiguration</a>.
    """
    
    functions: Optional[list[shared_functionconfiguration.FunctionConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Functions') }})
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    
