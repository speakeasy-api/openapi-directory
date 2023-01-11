import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostListRecurringDetailsRequest:
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostListRecurringDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    recurring_details_result: Optional[Any] = dataclasses.field(default=None)
    
