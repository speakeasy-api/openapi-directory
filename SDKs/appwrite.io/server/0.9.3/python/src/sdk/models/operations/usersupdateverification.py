import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import user as shared_user


@dataclasses.dataclass
class UsersUpdateVerificationPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UsersUpdateVerificationRequestBody:
    email_verification: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailVerification') }})
    

@dataclasses.dataclass
class UsersUpdateVerificationSecurity:
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class UsersUpdateVerificationRequest:
    path_params: UsersUpdateVerificationPathParams = dataclasses.field()
    security: UsersUpdateVerificationSecurity = dataclasses.field()
    request: Optional[UsersUpdateVerificationRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UsersUpdateVerificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    
