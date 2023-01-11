import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userdefinedfunction as shared_userdefinedfunction


@dataclass_json
@dataclasses.dataclass
class GetUserDefinedFunctionsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    user_defined_functions: Optional[list[shared_userdefinedfunction.UserDefinedFunction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserDefinedFunctions') }})
    
