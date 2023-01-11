import dataclasses
from typing import Optional


@dataclasses.dataclass
class CPUUtilization:
    r"""CPUUtilization
    CPU utilization metrics for an instance.
    """
    
    io_wait: Optional[float] = dataclasses.field(default=None)
    irq: Optional[float] = dataclasses.field(default=None)
    idle: Optional[float] = dataclasses.field(default=None)
    nice: Optional[float] = dataclasses.field(default=None)
    privileged: Optional[float] = dataclasses.field(default=None)
    soft_irq: Optional[float] = dataclasses.field(default=None)
    system: Optional[float] = dataclasses.field(default=None)
    user: Optional[float] = dataclasses.field(default=None)
    
