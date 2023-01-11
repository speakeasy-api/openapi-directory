import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostOriginKeysRequest:
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostOriginKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    checkout_utility_response: Optional[Any] = dataclasses.field(default=None)
    
