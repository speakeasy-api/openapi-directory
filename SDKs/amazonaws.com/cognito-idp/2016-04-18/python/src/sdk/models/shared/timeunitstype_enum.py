import dataclasses
from enum import Enum

class TimeUnitsTypeEnum(str, Enum):
    SECONDS = "seconds"
    MINUTES = "minutes"
    HOURS = "hours"
    DAYS = "days"

