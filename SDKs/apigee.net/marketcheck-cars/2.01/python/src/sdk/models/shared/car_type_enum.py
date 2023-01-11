import dataclasses
from enum import Enum

class CarTypeEnum(str, Enum):
    NEW = "new"
    USED = "used"

