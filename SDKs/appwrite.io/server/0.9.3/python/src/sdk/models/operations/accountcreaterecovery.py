import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import token as shared_token


@dataclass_json
@dataclasses.dataclass
class AccountCreateRecoveryRequestBody:
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclasses.dataclass
class AccountCreateRecoverySecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AccountCreateRecoveryRequest:
    security: AccountCreateRecoverySecurity = dataclasses.field()
    request: Optional[AccountCreateRecoveryRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AccountCreateRecoveryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    token: Optional[shared_token.Token] = dataclasses.field(default=None)
    
