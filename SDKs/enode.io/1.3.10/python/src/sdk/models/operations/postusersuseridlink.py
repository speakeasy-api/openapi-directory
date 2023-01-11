import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PostUsersUseridLinkPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    
class PostUsersUseridLinkRequestBodyVendorEnum(str, Enum):
    TESLA = "TESLA"
    BMW = "BMW"
    AUDI = "AUDI"
    VOLKSWAGEN = "VOLKSWAGEN"
    HYUNDAI = "HYUNDAI"
    PEUGEOT = "PEUGEOT"
    NISSAN = "NISSAN"


@dataclass_json
@dataclasses.dataclass
class PostUsersUseridLinkRequestBody:
    force_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forceLanguage') }})
    link_multiple: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkMultiple') }})
    user_image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userImage') }})
    user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    vendor: Optional[PostUsersUseridLinkRequestBodyVendorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendor') }})
    

@dataclasses.dataclass
class PostUsersUseridLinkSecurity:
    client_access_token: shared_security.SchemeClientAccessToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class PostUsersUseridLink200ApplicationJSON:
    link_state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkState') }})
    

@dataclasses.dataclass
class PostUsersUseridLinkRequest:
    path_params: PostUsersUseridLinkPathParams = dataclasses.field()
    security: PostUsersUseridLinkSecurity = dataclasses.field()
    request: Optional[PostUsersUseridLinkRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostUsersUseridLinkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_users_userid_link_200_application_json_object: Optional[PostUsersUseridLink200ApplicationJSON] = dataclasses.field(default=None)
    
