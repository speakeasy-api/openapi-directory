import dataclasses
from enum import Enum

class StatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    CREATING = "CREATING"
    FAILED = "FAILED"

