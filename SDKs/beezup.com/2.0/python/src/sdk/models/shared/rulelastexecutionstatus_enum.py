import dataclasses
from enum import Enum

class RuleLastExecutionStatusEnum(str, Enum):
    IN_PROGRESS = "InProgress"
    SUCCEEDED = "Succeeded"
    FAILED = "Failed"
    UNKNOWN = "Unknown"

