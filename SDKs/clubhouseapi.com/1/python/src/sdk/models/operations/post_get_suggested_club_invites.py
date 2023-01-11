import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostGetSuggestedClubInvitesRequest:
    request: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostGetSuggestedClubInvitesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
