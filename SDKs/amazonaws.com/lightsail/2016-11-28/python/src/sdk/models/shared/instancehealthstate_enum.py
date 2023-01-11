import dataclasses
from enum import Enum

class InstanceHealthStateEnum(str, Enum):
    INITIAL = "initial"
    HEALTHY = "healthy"
    UNHEALTHY = "unhealthy"
    UNUSED = "unused"
    DRAINING = "draining"
    UNAVAILABLE = "unavailable"

