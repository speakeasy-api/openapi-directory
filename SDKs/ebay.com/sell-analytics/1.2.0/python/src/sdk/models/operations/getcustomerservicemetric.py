import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import getcustomerservicemetricresponse as shared_getcustomerservicemetricresponse


@dataclasses.dataclass
class GetCustomerServiceMetricPathParams:
    customer_service_metric_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customer_service_metric_type', 'style': 'simple', 'explode': False }})
    evaluation_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'evaluation_type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCustomerServiceMetricQueryParams:
    evaluation_marketplace_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'evaluation_marketplace_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCustomerServiceMetricSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCustomerServiceMetricRequest:
    path_params: GetCustomerServiceMetricPathParams = dataclasses.field()
    query_params: GetCustomerServiceMetricQueryParams = dataclasses.field()
    security: GetCustomerServiceMetricSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCustomerServiceMetricResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_customer_service_metric_response: Optional[shared_getcustomerservicemetricresponse.GetCustomerServiceMetricResponse] = dataclasses.field(default=None)
    
