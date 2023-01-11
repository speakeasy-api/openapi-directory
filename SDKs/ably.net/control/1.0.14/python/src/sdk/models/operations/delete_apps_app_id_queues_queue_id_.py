import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class DeleteAppsAppIDQueuesQueueIDPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    queue_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'queue_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAppsAppIDQueuesQueueIDSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class DeleteAppsAppIDQueuesQueueIDRequest:
    path_params: DeleteAppsAppIDQueuesQueueIDPathParams = dataclasses.field()
    security: DeleteAppsAppIDQueuesQueueIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAppsAppIDQueuesQueueIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
