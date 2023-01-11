import dataclasses
from enum import Enum

class DirectoryStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    DELETED = "DELETED"

