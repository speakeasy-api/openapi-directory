import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostDisableRequest:
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostDisableResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    disable_result: Optional[Any] = dataclasses.field(default=None)
    
