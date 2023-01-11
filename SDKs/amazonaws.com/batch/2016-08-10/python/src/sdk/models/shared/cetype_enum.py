import dataclasses
from enum import Enum

class CeTypeEnum(str, Enum):
    MANAGED = "MANAGED"
    UNMANAGED = "UNMANAGED"

