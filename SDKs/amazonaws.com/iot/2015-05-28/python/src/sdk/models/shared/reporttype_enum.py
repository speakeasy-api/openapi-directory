import dataclasses
from enum import Enum

class ReportTypeEnum(str, Enum):
    ERRORS = "ERRORS"
    RESULTS = "RESULTS"

