import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetBalanceAccountsIDPaymentInstrumentsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBalanceAccountsIDPaymentInstrumentsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetBalanceAccountsIDPaymentInstrumentsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic_auth: Optional[shared_security.SchemeBasicAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetBalanceAccountsIDPaymentInstrumentsRequest:
    path_params: GetBalanceAccountsIDPaymentInstrumentsPathParams = dataclasses.field()
    query_params: GetBalanceAccountsIDPaymentInstrumentsQueryParams = dataclasses.field()
    security: GetBalanceAccountsIDPaymentInstrumentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetBalanceAccountsIDPaymentInstrumentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_payment_instruments_response: Optional[Any] = dataclasses.field(default=None)
    rest_service_error: Optional[Any] = dataclasses.field(default=None)
    
