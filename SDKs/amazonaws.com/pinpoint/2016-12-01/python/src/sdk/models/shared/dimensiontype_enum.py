import dataclasses
from enum import Enum

class DimensionTypeEnum(str, Enum):
    INCLUSIVE = "INCLUSIVE"
    EXCLUSIVE = "EXCLUSIVE"

