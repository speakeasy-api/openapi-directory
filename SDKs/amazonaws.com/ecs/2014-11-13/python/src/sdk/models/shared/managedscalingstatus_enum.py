import dataclasses
from enum import Enum

class ManagedScalingStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

