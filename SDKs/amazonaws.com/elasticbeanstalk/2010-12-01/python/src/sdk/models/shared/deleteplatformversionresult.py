import dataclasses
from typing import Optional
from ..shared import platformsummary as shared_platformsummary


@dataclasses.dataclass
class DeletePlatformVersionResult:
    platform_summary: Optional[shared_platformsummary.PlatformSummary] = dataclasses.field(default=None)
    
