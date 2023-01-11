import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class FetchBoundaryByIDPathParams:
    boundary_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'boundaryId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchBoundaryByIDSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared_security.SchemeOauth2AuthorizationCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FetchBoundaryByIDRequest:
    path_params: FetchBoundaryByIDPathParams = dataclasses.field()
    security: FetchBoundaryByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FetchBoundaryByIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    boundary: Optional[Any] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
