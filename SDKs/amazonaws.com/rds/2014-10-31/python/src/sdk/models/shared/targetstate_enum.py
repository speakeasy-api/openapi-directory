import dataclasses
from enum import Enum

class TargetStateEnum(str, Enum):
    REGISTERING = "REGISTERING"
    AVAILABLE = "AVAILABLE"
    UNAVAILABLE = "UNAVAILABLE"

