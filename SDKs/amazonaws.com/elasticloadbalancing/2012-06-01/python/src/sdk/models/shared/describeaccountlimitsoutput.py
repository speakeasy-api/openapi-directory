import dataclasses
from typing import Optional
from ..shared import limit as shared_limit


@dataclasses.dataclass
class DescribeAccountLimitsOutput:
    limits: Optional[list[shared_limit.Limit]] = dataclasses.field(default=None)
    next_marker: Optional[str] = dataclasses.field(default=None)
    
