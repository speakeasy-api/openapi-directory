import dataclasses
from enum import Enum

class ManagedTerminationProtectionEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

