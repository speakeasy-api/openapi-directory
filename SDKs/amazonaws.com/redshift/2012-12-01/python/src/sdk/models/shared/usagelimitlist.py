import dataclasses
from typing import Optional
from ..shared import usagelimit as shared_usagelimit


@dataclasses.dataclass
class UsageLimitList:
    marker: Optional[str] = dataclasses.field(default=None)
    usage_limits: Optional[list[shared_usagelimit.UsageLimit]] = dataclasses.field(default=None)
    
