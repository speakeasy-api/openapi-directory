import dataclasses
from enum import Enum

class ReportFrequencyEnum(str, Enum):
    MONTHLY = "MONTHLY"
    DAILY = "DAILY"
    ALL = "ALL"

