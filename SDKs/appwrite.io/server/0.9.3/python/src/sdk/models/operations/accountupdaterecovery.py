import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import token as shared_token


@dataclass_json
@dataclasses.dataclass
class AccountUpdateRecoveryRequestBody:
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    password_again: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordAgain') }})
    secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    user_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    

@dataclasses.dataclass
class AccountUpdateRecoverySecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AccountUpdateRecoveryRequest:
    security: AccountUpdateRecoverySecurity = dataclasses.field()
    request: Optional[AccountUpdateRecoveryRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AccountUpdateRecoveryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    token: Optional[shared_token.Token] = dataclasses.field(default=None)
    
