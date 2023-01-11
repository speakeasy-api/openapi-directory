import dataclasses
from enum import Enum

class RuleExecutionReportingStatusEnum(str, Enum):
    IN_PROGRESS = "InProgress"
    SUCCEEDED = "Succeeded"
    ALREADY_IN_PROGRESS = "AlreadyInProgress"
    ABORTED = "Aborted"
    FAILED = "Failed"
    UNKNOWN = "Unknown"

