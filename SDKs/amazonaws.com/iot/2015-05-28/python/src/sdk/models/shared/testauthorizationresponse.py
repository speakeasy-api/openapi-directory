import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authresult as shared_authresult


@dataclass_json
@dataclasses.dataclass
class TestAuthorizationResponse:
    auth_results: Optional[list[shared_authresult.AuthResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authResults') }})
    
