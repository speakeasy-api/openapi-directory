import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import user as shared_user


@dataclass_json
@dataclasses.dataclass
class AccountCreateRequestBody:
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class AccountCreateSecurity:
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AccountCreateRequest:
    security: AccountCreateSecurity = dataclasses.field()
    request: Optional[AccountCreateRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AccountCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    
