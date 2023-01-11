import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import app_patch as shared_app_patch
from ..shared import app_response as shared_app_response
from ..shared import error as shared_error


@dataclasses.dataclass
class PatchAppsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchAppsIDSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class PatchAppsIDRequest:
    path_params: PatchAppsIDPathParams = dataclasses.field()
    security: PatchAppsIDSecurity = dataclasses.field()
    request: Optional[shared_app_patch.AppPatch] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchAppsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    app_response: Optional[shared_app_response.AppResponse] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
