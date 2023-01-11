import dataclasses
from typing import Optional
from ..shared import feed as shared_feed


@dataclasses.dataclass
class ActivityGetFeedsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    feed: Optional[shared_feed.Feed] = dataclasses.field(default=None)
    
