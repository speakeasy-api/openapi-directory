import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeScheduledInstancesResult:
    r"""DescribeScheduledInstancesResult
    Contains the output of DescribeScheduledInstances.
    """
    
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    scheduled_instance_set: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
