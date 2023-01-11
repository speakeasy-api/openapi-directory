import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import apikeyentity as shared_apikeyentity

class PostAPIKeysRequestBodyPermissionSetEnum(str, Enum):
    NONE = "none"
    FULL = "full"
    DESKTOP_APP = "desktop_app"
    SYNC_APP = "sync_app"
    OFFICE_INTEGRATION = "office_integration"
    MOBILE_APP = "mobile_app"


@dataclasses.dataclass
class PostAPIKeysRequestBody:
    expires_at: Optional[datetime] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'expires_at' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    permission_set: Optional[PostAPIKeysRequestBodyPermissionSetEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'permission_set' }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclasses.dataclass
class PostAPIKeysRequest:
    request: Optional[PostAPIKeysRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostAPIKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_key_entity: Optional[shared_apikeyentity.APIKeyEntity] = dataclasses.field(default=None)
    
