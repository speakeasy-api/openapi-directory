import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import queue as shared_queue
from ..shared import error as shared_error
from ..shared import queue_response as shared_queue_response


@dataclasses.dataclass
class PostAppsAppIDQueuesPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostAppsAppIDQueuesSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class PostAppsAppIDQueuesRequest:
    path_params: PostAppsAppIDQueuesPathParams = dataclasses.field()
    security: PostAppsAppIDQueuesSecurity = dataclasses.field()
    request: Optional[shared_queue.Queue] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAppsAppIDQueuesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    queue_response: Optional[shared_queue_response.QueueResponse] = dataclasses.field(default=None)
    
