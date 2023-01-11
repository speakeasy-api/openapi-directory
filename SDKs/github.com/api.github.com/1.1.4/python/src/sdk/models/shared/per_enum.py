import dataclasses
from enum import Enum

class PerEnum(str, Enum):
    UNKNOWN = ""
    DAY = "day"
    WEEK = "week"

