import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import session as shared_session


@dataclass_json
@dataclasses.dataclass
class AccountCreateSessionRequestBody:
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    

@dataclasses.dataclass
class AccountCreateSessionSecurity:
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AccountCreateSessionRequest:
    security: AccountCreateSessionSecurity = dataclasses.field()
    request: Optional[AccountCreateSessionRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AccountCreateSessionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    session: Optional[shared_session.Session] = dataclasses.field(default=None)
    
