import dataclasses
from enum import Enum

class NumberOfPeopleFilterTypeEnum(str, Enum):
    NONE = "none"
    ONE = "one"
    TWO = "two"
    GROUP = "group"

