import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import apikeyentity as shared_apikeyentity


@dataclasses.dataclass
class PostUsersUserIDAPIKeysPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class PostUsersUserIDAPIKeysRequestBodyPermissionSetEnum(str, Enum):
    NONE = "none"
    FULL = "full"
    DESKTOP_APP = "desktop_app"
    SYNC_APP = "sync_app"
    OFFICE_INTEGRATION = "office_integration"
    MOBILE_APP = "mobile_app"


@dataclasses.dataclass
class PostUsersUserIDAPIKeysRequestBody:
    expires_at: Optional[datetime] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'expires_at' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    permission_set: Optional[PostUsersUserIDAPIKeysRequestBodyPermissionSetEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'permission_set' }})
    

@dataclasses.dataclass
class PostUsersUserIDAPIKeysRequest:
    path_params: PostUsersUserIDAPIKeysPathParams = dataclasses.field()
    request: Optional[PostUsersUserIDAPIKeysRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostUsersUserIDAPIKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_key_entity: Optional[shared_apikeyentity.APIKeyEntity] = dataclasses.field(default=None)
    
