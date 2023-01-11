import dataclasses
from enum import Enum

class CustomHealthStatusEnum(str, Enum):
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"

