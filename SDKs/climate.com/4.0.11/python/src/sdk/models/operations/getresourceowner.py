import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import resourceowner as shared_resourceowner


@dataclasses.dataclass
class GetResourceOwnerPathParams:
    resource_owner_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'resourceOwnerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourceOwnerSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared_security.SchemeOauth2AuthorizationCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetResourceOwnerRequest:
    path_params: GetResourceOwnerPathParams = dataclasses.field()
    security: GetResourceOwnerSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetResourceOwnerResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    resource_owner: Optional[shared_resourceowner.ResourceOwner] = dataclasses.field(default=None)
    
