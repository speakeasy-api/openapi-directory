import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetTransactionsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTransactionsIDSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTransactionsIDRequest:
    path_params: GetTransactionsIDPathParams = dataclasses.field()
    security: GetTransactionsIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTransactionsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rest_service_error: Optional[Any] = dataclasses.field(default=None)
    transaction: Optional[Any] = dataclasses.field(default=None)
    
