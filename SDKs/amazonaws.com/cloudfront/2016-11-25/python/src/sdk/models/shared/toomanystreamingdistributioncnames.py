import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyStreamingDistributionCnamEs:
    message: Optional[str] = dataclasses.field(default=None)
    
