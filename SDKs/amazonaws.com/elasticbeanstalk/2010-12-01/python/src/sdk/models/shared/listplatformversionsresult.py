import dataclasses
from typing import Optional
from ..shared import platformsummary as shared_platformsummary


@dataclasses.dataclass
class ListPlatformVersionsResult:
    next_token: Optional[str] = dataclasses.field(default=None)
    platform_summary_list: Optional[list[shared_platformsummary.PlatformSummary]] = dataclasses.field(default=None)
    
