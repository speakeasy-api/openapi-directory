import dataclasses
from typing import Optional
from ..shared import accessentry as shared_accessentry


@dataclasses.dataclass
class AccessListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_entries: Optional[list[shared_accessentry.AccessEntry]] = dataclasses.field(default=None)
    
