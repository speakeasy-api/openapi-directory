import dataclasses
from typing import Optional
from ..shared import builder as shared_builder
from ..shared import platformsummary as shared_platformsummary


@dataclasses.dataclass
class CreatePlatformVersionResult:
    builder: Optional[shared_builder.Builder] = dataclasses.field(default=None)
    platform_summary: Optional[shared_platformsummary.PlatformSummary] = dataclasses.field(default=None)
    
