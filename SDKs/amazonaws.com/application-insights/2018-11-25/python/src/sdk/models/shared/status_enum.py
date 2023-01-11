import dataclasses
from enum import Enum

class StatusEnum(str, Enum):
    IGNORE = "IGNORE"
    RESOLVED = "RESOLVED"
    PENDING = "PENDING"

