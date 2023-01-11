import dataclasses
from enum import Enum

class CarCarTypeEnum(str, Enum):
    NEW = "new"
    USED = "used"
    CERTIFIED = "certified"

