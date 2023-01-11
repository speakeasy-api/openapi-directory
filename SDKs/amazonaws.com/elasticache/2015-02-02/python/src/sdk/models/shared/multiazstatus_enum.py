import dataclasses
from enum import Enum

class MultiAzStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"

