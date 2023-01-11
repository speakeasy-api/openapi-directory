import dataclasses
from enum import Enum

class PolicyTypeEnum(str, Enum):
    INLINE = "INLINE"
    MANAGED = "MANAGED"

