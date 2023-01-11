import dataclasses
from typing import Optional
from ..shared import platformdescription as shared_platformdescription


@dataclasses.dataclass
class DescribePlatformVersionResult:
    platform_description: Optional[shared_platformdescription.PlatformDescription] = dataclasses.field(default=None)
    
