import dataclasses
from enum import Enum

class TimeUnitEnum(str, Enum):
    HOURLY = "HOURLY"
    DAILY = "DAILY"
    MONTHLY = "MONTHLY"

