import dataclasses
from enum import Enum

class PerPageEnum(str, Enum):
    ACTIVE = "active"
    DELETED = "deleted"

