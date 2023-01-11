import dataclasses
from enum import Enum

class ControlStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

