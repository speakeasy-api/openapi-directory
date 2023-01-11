import dataclasses
from enum import Enum

class ReportTypeEnum(str, Enum):
    FINDING = "FINDING"
    FULL = "FULL"

