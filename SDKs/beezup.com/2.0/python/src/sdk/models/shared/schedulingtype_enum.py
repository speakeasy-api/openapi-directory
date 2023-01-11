import dataclasses
from enum import Enum

class SchedulingTypeEnum(str, Enum):
    SCHEDULE = "Schedule"
    INTERVAL = "Interval"

