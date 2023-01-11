import dataclasses
from typing import Optional
from ..shared import api_overview as shared_api_overview


@dataclasses.dataclass
class MetaGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_overview: Optional[shared_api_overview.APIOverview] = dataclasses.field(default=None)
    
