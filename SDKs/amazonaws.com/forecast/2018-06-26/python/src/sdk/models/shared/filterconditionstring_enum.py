import dataclasses
from enum import Enum

class FilterConditionStringEnum(str, Enum):
    IS = "IS"
    IS_NOT = "IS_NOT"

