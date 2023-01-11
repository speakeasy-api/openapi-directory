import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostGetSuggestedSpeakersRequest:
    request: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostGetSuggestedSpeakersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
