import dataclasses
from typing import Optional
from ..shared import cpuutilization as shared_cpuutilization


@dataclasses.dataclass
class SystemStatus:
    r"""SystemStatus
    CPU utilization and load average metrics for an Amazon EC2 instance.
    """
    
    cpu_utilization: Optional[shared_cpuutilization.CPUUtilization] = dataclasses.field(default=None)
    load_average: Optional[list[float]] = dataclasses.field(default=None)
    
