import dataclasses
from typing import Optional
from ..shared import playmediarequest as shared_playmediarequest
from ..shared import queue as shared_queue


@dataclasses.dataclass
class PlayMediaOnQueueHeaders:
    accept_language: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    user_agent: str = dataclasses.field(metadata={'header': { 'field_name': 'User-Agent', 'style': 'simple', 'explode': False }})
    x_applecloudextension_session_id: str = dataclasses.field(metadata={'header': { 'field_name': 'x-applecloudextension-session-id', 'style': 'simple', 'explode': False }})
    x_applecloudextension_retry_count: Optional[float] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-retry-count', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayMediaOnQueueRequest:
    headers: PlayMediaOnQueueHeaders = dataclasses.field()
    request: Optional[shared_playmediarequest.PlayMediaRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PlayMediaOnQueueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    queue: Optional[shared_queue.Queue] = dataclasses.field(default=None)
    
