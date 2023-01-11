import dataclasses
from enum import Enum

class ReportStatusTypeEnum(str, Enum):
    GENERATING = "GENERATING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    INCOMPLETE = "INCOMPLETE"
    DELETING = "DELETING"

