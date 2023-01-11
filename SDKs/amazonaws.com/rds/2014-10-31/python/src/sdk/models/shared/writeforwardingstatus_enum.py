import dataclasses
from enum import Enum

class WriteForwardingStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"
    ENABLING = "enabling"
    DISABLING = "disabling"
    UNKNOWN = "unknown"

