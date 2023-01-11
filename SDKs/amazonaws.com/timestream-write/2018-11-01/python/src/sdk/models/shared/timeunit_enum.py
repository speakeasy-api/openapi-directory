import dataclasses
from enum import Enum

class TimeUnitEnum(str, Enum):
    MILLISECONDS = "MILLISECONDS"
    SECONDS = "SECONDS"
    MICROSECONDS = "MICROSECONDS"
    NANOSECONDS = "NANOSECONDS"

