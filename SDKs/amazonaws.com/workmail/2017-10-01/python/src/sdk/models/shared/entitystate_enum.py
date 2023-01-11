import dataclasses
from enum import Enum

class EntityStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    DELETED = "DELETED"

