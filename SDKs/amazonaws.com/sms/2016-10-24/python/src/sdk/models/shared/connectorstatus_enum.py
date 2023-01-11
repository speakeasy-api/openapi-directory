import dataclasses
from enum import Enum

class ConnectorStatusEnum(str, Enum):
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"

