import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class EnterpriseAdminUpdateUsernameForUserPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminUpdateUsernameForUserRequestBody:
    login: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminUpdateUsernameForUser202ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdateUsernameForUserRequest:
    path_params: EnterpriseAdminUpdateUsernameForUserPathParams = dataclasses.field()
    request: Optional[EnterpriseAdminUpdateUsernameForUserRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdateUsernameForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    enterprise_admin_update_username_for_user_202_application_json_object: Optional[EnterpriseAdminUpdateUsernameForUser202ApplicationJSON] = dataclasses.field(default=None)
    
