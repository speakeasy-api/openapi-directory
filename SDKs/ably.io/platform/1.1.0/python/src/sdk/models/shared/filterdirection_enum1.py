import dataclasses
from enum import Enum

class FilterDirectionEnum1(str, Enum):
    MINUTE = "minute"
    HOUR = "hour"
    DAY = "day"
    MONTH = "month"

