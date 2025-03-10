from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class InvoiceItemsAddQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class InvoiceItemsAddHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class InvoiceItemsAddSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class InvoiceItemsAddRequest:
    query_params: InvoiceItemsAddQueryParams = field(default=None)
    headers: InvoiceItemsAddHeaders = field(default=None)
    request: shared.InvoiceItem = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: InvoiceItemsAddSecurity = field(default=None)
    

@dataclass
class InvoiceItemsAddResponses:
    bad_request_response: Optional[Any] = field(default=None)
    create_invoice_item_response: Optional[shared.CreateInvoiceItemResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class InvoiceItemsAddResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, InvoiceItemsAddResponses]] = field(default=None)
    status_code: int = field(default=None)
    
