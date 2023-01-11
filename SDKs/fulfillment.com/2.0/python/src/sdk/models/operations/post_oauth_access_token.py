import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oneorders_get_responses_404_content_application_1json_schema as shared_oneorders_get_responses_404_content_application_1json_schema

class PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum(str, Enum):
    PASSWORD = "password"
    REFRESH_TOKEN = "refresh_token"

class PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum(str, Enum):
    OMS = "oms"


@dataclass_json
@dataclasses.dataclass
class PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2:
    client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    client_secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_secret') }})
    grant_type: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grant_type') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    scope: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3:
    client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    client_secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_secret') }})
    grant_type: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grant_type') }})
    refresh_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('refresh_token') }})
    scope: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOauthAccessTokenAccessTokenResponseV2:
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    expires_in: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_in') }})
    refresh_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refresh_token') }})
    token_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_type') }})
    

@dataclasses.dataclass
class PostOauthAccessTokenRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostOauthAccessTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_token_response_v2: Optional[PostOauthAccessTokenAccessTokenResponseV2] = dataclasses.field(default=None)
    oneorders_get_responses_404_content_application_1json_schema: Optional[shared_oneorders_get_responses_404_content_application_1json_schema.OneordersGetResponses404ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
