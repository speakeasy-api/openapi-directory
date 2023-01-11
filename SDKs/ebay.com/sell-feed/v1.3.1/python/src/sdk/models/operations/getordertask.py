import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import ordertask as shared_ordertask


@dataclasses.dataclass
class GetOrderTaskPathParams:
    task_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrderTaskSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetOrderTaskRequest:
    path_params: GetOrderTaskPathParams = dataclasses.field()
    security: GetOrderTaskSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetOrderTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    order_task: Optional[shared_ordertask.OrderTask] = dataclasses.field(default=None)
    
