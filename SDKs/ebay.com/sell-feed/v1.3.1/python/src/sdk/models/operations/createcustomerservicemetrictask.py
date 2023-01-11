import dataclasses
from ..shared import security as shared_security
from ..shared import createservicemetricstaskrequest as shared_createservicemetricstaskrequest


@dataclasses.dataclass
class CreateCustomerServiceMetricTaskHeaders:
    accept_language: str = dataclasses.field(metadata={'header': { 'field_name': 'accept-language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateCustomerServiceMetricTaskSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateCustomerServiceMetricTaskRequest:
    headers: CreateCustomerServiceMetricTaskHeaders = dataclasses.field()
    request: shared_createservicemetricstaskrequest.CreateServiceMetricsTaskRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCustomerServiceMetricTaskSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateCustomerServiceMetricTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
