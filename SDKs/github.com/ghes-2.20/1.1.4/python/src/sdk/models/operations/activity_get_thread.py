import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import thread as shared_thread


@dataclasses.dataclass
class ActivityGetThreadPathParams:
    thread_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'thread_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActivityGetThreadRequest:
    path_params: ActivityGetThreadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActivityGetThreadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    thread: Optional[shared_thread.Thread] = dataclasses.field(default=None)
    
