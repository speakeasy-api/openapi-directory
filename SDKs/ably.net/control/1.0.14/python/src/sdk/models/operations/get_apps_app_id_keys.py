import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import key_response as shared_key_response


@dataclasses.dataclass
class GetAppsAppIDKeysPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAppsAppIDKeysSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAppsAppIDKeysRequest:
    path_params: GetAppsAppIDKeysPathParams = dataclasses.field()
    security: GetAppsAppIDKeysSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAppsAppIDKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    key_responses: Optional[list[shared_key_response.KeyResponse]] = dataclasses.field(default=None)
    
