import dataclasses
from enum import Enum

class StreamingStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

