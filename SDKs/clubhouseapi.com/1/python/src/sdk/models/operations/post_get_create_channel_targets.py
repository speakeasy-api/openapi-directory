import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostGetCreateChannelTargetsRequest:
    request: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostGetCreateChannelTargetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
