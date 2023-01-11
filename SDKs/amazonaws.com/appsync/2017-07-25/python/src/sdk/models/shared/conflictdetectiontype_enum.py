import dataclasses
from enum import Enum

class ConflictDetectionTypeEnum(str, Enum):
    VERSION = "VERSION"
    NONE = "NONE"

