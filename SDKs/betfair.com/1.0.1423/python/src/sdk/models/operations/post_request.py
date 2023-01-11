import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostRequestRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    all_response_types_example: Optional[Any] = dataclasses.field(default=None)
    
