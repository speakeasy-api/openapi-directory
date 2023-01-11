import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class GetTokenRevocationIDRequestBodyTokenTypeHintEnum(str, Enum):
    REFRESH_TOKEN = "refresh_token"
    ACCESS_TOKEN = "access_token"


@dataclass_json
@dataclasses.dataclass
class GetTokenRevocationIDRequestBody:
    token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    token_type_hint: Optional[GetTokenRevocationIDRequestBodyTokenTypeHintEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_type_hint') }})
    

@dataclasses.dataclass
class GetTokenRevocationIDSecurity:
    oauthsecurity: shared_security.SchemeOauthsecurity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetTokenRevocationIDRequest:
    security: GetTokenRevocationIDSecurity = dataclasses.field()
    request: Optional[GetTokenRevocationIDRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetTokenRevocationIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
