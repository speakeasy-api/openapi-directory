import dataclasses
from enum import Enum

class StatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"

