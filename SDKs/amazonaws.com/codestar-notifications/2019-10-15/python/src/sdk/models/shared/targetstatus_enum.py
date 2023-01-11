import dataclasses
from enum import Enum

class TargetStatusEnum(str, Enum):
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    UNREACHABLE = "UNREACHABLE"
    INACTIVE = "INACTIVE"
    DEACTIVATED = "DEACTIVATED"

