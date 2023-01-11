import dataclasses
from enum import Enum

class EnvironmentAccessTypeEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "readOnly"
    NONE = "none"

