import dataclasses
from enum import Enum

class ContainerServiceMetricNameEnum(str, Enum):
    CPU_UTILIZATION = "CPUUtilization"
    MEMORY_UTILIZATION = "MemoryUtilization"

