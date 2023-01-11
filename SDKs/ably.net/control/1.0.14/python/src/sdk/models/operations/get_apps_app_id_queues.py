import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import queue_response as shared_queue_response


@dataclasses.dataclass
class GetAppsAppIDQueuesPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAppsAppIDQueuesSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAppsAppIDQueuesRequest:
    path_params: GetAppsAppIDQueuesPathParams = dataclasses.field()
    security: GetAppsAppIDQueuesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAppsAppIDQueuesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    queue_responses: Optional[list[shared_queue_response.QueueResponse]] = dataclasses.field(default=None)
    
