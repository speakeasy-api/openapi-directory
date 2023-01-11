import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import apikeyentity as shared_apikeyentity


@dataclasses.dataclass
class PatchAPIKeysIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PatchAPIKeysIDRequestBodyPermissionSetEnum(str, Enum):
    NONE = "none"
    FULL = "full"
    DESKTOP_APP = "desktop_app"
    SYNC_APP = "sync_app"
    OFFICE_INTEGRATION = "office_integration"
    MOBILE_APP = "mobile_app"


@dataclasses.dataclass
class PatchAPIKeysIDRequestBody:
    expires_at: Optional[datetime] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'expires_at' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    permission_set: Optional[PatchAPIKeysIDRequestBodyPermissionSetEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'permission_set' }})
    

@dataclasses.dataclass
class PatchAPIKeysIDRequest:
    path_params: PatchAPIKeysIDPathParams = dataclasses.field()
    request: Optional[PatchAPIKeysIDRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PatchAPIKeysIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_key_entity: Optional[shared_apikeyentity.APIKeyEntity] = dataclasses.field(default=None)
    
