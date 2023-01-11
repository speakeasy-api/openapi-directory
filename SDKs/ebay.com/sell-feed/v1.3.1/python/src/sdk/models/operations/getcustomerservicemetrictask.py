import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import servicemetricstask as shared_servicemetricstask


@dataclasses.dataclass
class GetCustomerServiceMetricTaskPathParams:
    task_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCustomerServiceMetricTaskSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCustomerServiceMetricTaskRequest:
    path_params: GetCustomerServiceMetricTaskPathParams = dataclasses.field()
    security: GetCustomerServiceMetricTaskSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCustomerServiceMetricTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_metrics_task: Optional[shared_servicemetricstask.ServiceMetricsTask] = dataclasses.field(default=None)
    
