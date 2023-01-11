import dataclasses
from enum import Enum

class RecencyTypeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

