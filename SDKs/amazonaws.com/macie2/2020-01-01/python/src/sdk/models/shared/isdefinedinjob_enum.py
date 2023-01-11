import dataclasses
from enum import Enum

class IsDefinedInJobEnum(str, Enum):
    TRUE = "TRUE"
    FALSE = "FALSE"
    UNKNOWN = "UNKNOWN"

