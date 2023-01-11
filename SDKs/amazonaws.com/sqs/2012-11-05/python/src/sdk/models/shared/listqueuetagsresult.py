import dataclasses
from typing import Optional


@dataclasses.dataclass
class ListQueueTagsResult:
    tags: Optional[dict[str, str]] = dataclasses.field(default=None)
    
