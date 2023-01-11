import dataclasses
from enum import Enum

class AdminStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLE_IN_PROGRESS = "DISABLE_IN_PROGRESS"

