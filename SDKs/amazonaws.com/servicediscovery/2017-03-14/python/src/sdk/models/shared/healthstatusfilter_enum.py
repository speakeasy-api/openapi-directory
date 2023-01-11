import dataclasses
from enum import Enum

class HealthStatusFilterEnum(str, Enum):
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"
    ALL = "ALL"
    HEALTHY_OR_ELSE_ALL = "HEALTHY_OR_ELSE_ALL"

