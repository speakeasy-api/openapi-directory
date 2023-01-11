import dataclasses
from typing import Optional


@dataclasses.dataclass
class PutMetricStreamOutput:
    arn: Optional[str] = dataclasses.field(default=None)
    
