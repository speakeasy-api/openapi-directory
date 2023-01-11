import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import rate_limit_overview as shared_rate_limit_overview


@dataclasses.dataclass
class RateLimitGetResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    rate_limit_overview: Optional[shared_rate_limit_overview.RateLimitOverview] = dataclasses.field(default=None)
    
