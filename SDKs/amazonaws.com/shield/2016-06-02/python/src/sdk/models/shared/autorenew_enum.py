import dataclasses
from enum import Enum

class AutoRenewEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

