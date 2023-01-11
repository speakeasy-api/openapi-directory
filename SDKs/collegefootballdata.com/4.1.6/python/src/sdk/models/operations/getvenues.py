import dataclasses
from typing import Optional
from ..shared import venue as shared_venue


@dataclasses.dataclass
class GetVenuesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    venues: Optional[list[shared_venue.Venue]] = dataclasses.field(default=None)
    
