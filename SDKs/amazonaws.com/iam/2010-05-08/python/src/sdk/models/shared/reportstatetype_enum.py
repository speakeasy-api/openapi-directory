import dataclasses
from enum import Enum

class ReportStateTypeEnum(str, Enum):
    STARTED = "STARTED"
    INPROGRESS = "INPROGRESS"
    COMPLETE = "COMPLETE"

