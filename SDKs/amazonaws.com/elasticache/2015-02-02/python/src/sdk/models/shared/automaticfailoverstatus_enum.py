import dataclasses
from enum import Enum

class AutomaticFailoverStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"
    ENABLING = "enabling"
    DISABLING = "disabling"

