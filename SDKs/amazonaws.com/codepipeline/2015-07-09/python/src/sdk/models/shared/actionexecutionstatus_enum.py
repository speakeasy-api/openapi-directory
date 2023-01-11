import dataclasses
from enum import Enum

class ActionExecutionStatusEnum(str, Enum):
    IN_PROGRESS = "InProgress"
    ABANDONED = "Abandoned"
    SUCCEEDED = "Succeeded"
    FAILED = "Failed"

