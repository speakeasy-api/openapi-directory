import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class FetchFieldsQueryParams:
    field_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fieldName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchFieldsHeaders:
    x_limit: Optional[int] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Limit', 'style': 'simple', 'explode': False }})
    x_next_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Next-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchFieldsSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared_security.SchemeOauth2AuthorizationCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FetchFieldsRequest:
    headers: FetchFieldsHeaders = dataclasses.field()
    query_params: FetchFieldsQueryParams = dataclasses.field()
    security: FetchFieldsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FetchFieldsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    fields: Optional[Any] = dataclasses.field(default=None)
    
