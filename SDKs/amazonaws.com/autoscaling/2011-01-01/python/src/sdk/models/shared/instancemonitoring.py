import dataclasses
from typing import Optional


@dataclasses.dataclass
class InstanceMonitoring:
    r"""InstanceMonitoring
    Describes whether detailed monitoring is enabled for the Auto Scaling instances.
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None)
    
