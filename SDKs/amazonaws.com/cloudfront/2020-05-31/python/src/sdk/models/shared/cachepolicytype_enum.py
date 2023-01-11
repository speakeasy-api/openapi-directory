import dataclasses
from enum import Enum

class CachePolicyTypeEnum(str, Enum):
    MANAGED = "managed"
    CUSTOM = "custom"

