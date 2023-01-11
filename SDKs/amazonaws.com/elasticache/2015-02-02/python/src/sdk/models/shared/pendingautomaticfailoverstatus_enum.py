import dataclasses
from enum import Enum

class PendingAutomaticFailoverStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"

