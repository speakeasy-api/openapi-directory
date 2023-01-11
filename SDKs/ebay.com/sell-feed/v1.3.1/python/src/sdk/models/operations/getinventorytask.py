import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import inventorytask as shared_inventorytask


@dataclasses.dataclass
class GetInventoryTaskPathParams:
    task_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInventoryTaskSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetInventoryTaskRequest:
    path_params: GetInventoryTaskPathParams = dataclasses.field()
    security: GetInventoryTaskSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetInventoryTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inventory_task: Optional[shared_inventorytask.InventoryTask] = dataclasses.field(default=None)
    
