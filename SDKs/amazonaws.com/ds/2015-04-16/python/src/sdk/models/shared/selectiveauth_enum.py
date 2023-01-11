import dataclasses
from enum import Enum

class SelectiveAuthEnum(str, Enum):
    ENABLED = "Enabled"
    DISABLED = "Disabled"

