import dataclasses
from enum import Enum

class ReportFrequencyTypeEnum(str, Enum):
    DAY = "DAY"
    WEEK = "WEEK"
    MONTH = "MONTH"

