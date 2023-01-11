import dataclasses
from enum import Enum

class DetectMitigationActionExecutionStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    SUCCESSFUL = "SUCCESSFUL"
    FAILED = "FAILED"
    SKIPPED = "SKIPPED"

