import dataclasses
from enum import Enum

class HasLogicalRedundancyEnum(str, Enum):
    UNKNOWN = "unknown"
    YES = "yes"
    NO = "no"

