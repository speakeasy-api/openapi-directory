import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeScheduledInstanceAvailabilityResult:
    r"""DescribeScheduledInstanceAvailabilityResult
    Contains the output of DescribeScheduledInstanceAvailability.
    """
    
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    scheduled_instance_availability_set: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
