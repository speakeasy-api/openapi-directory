import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class FetchFieldByIDPathParams:
    field_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fieldId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchFieldByIDSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared_security.SchemeOauth2AuthorizationCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FetchFieldByIDRequest:
    path_params: FetchFieldByIDPathParams = dataclasses.field()
    security: FetchFieldByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FetchFieldByIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    field: Optional[Any] = dataclasses.field(default=None)
    
