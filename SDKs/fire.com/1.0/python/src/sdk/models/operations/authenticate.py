import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AuthenticateAuthenticationGrantTypeEnum(str, Enum):
    ACCESS_TOKEN = "AccessToken"


@dataclass_json
@dataclasses.dataclass
class AuthenticateAuthentication:
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    grant_type: Optional[AuthenticateAuthenticationGrantTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grantType') }})
    nonce: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonce') }})
    refresh_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshToken') }})
    

@dataclass_json
@dataclasses.dataclass
class AuthenticateAccessToken:
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    api_application_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiApplicationId') }})
    business_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessId') }})
    expiry: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    permissions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    

@dataclasses.dataclass
class AuthenticateRequest:
    request: AuthenticateAuthentication = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AuthenticateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_token: Optional[AuthenticateAccessToken] = dataclasses.field(default=None)
    
