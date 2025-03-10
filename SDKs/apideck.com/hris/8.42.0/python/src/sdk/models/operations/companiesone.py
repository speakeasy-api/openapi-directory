from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CompaniesOnePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompaniesOneQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class CompaniesOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class CompaniesOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompaniesOneRequest:
    path_params: CompaniesOnePathParams = field(default=None)
    query_params: CompaniesOneQueryParams = field(default=None)
    headers: CompaniesOneHeaders = field(default=None)
    security: CompaniesOneSecurity = field(default=None)
    

@dataclass
class CompaniesOneResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_hris_company_response: Optional[shared.GetHrisCompanyResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class CompaniesOneResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CompaniesOneResponses]] = field(default=None)
    status_code: int = field(default=None)
    
