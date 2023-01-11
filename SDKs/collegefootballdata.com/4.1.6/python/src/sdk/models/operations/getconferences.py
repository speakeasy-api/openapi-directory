import dataclasses
from typing import Optional
from ..shared import conference as shared_conference


@dataclasses.dataclass
class GetConferencesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conferences: Optional[list[shared_conference.Conference]] = dataclasses.field(default=None)
    
