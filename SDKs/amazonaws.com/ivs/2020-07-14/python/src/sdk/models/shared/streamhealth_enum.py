import dataclasses
from enum import Enum

class StreamHealthEnum(str, Enum):
    HEALTHY = "HEALTHY"
    STARVING = "STARVING"
    UNKNOWN = "UNKNOWN"

