import dataclasses
from typing import Optional
from ..shared import sortoptionresponse as shared_sortoptionresponse


@dataclasses.dataclass
class SortOptionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sort_option_response: Optional[shared_sortoptionresponse.SortOptionResponse] = dataclasses.field(default=None)
    
