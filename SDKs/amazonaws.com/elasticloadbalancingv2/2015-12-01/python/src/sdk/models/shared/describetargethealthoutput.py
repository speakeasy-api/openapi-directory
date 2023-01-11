import dataclasses
from typing import Optional
from ..shared import targethealthdescription as shared_targethealthdescription


@dataclasses.dataclass
class DescribeTargetHealthOutput:
    target_health_descriptions: Optional[list[shared_targethealthdescription.TargetHealthDescription]] = dataclasses.field(default=None)
    
