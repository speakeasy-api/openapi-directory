import dataclasses
from enum import Enum

class ListStateFilterActionEnum(str, Enum):
    INCLUDE = "include"
    EXCLUDE = "exclude"
    IGNORE = "ignore"

