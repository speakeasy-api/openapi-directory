import dataclasses
from enum import Enum

class ConnectionStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    DEPRECATED = "deprecated"

