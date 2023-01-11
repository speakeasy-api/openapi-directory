import dataclasses
from enum import Enum

class RetentionIntervalUnitValuesEnum(str, Enum):
    DAYS = "DAYS"
    WEEKS = "WEEKS"
    MONTHS = "MONTHS"
    YEARS = "YEARS"

