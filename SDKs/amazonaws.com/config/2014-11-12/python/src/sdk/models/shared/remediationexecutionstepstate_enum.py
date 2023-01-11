import dataclasses
from enum import Enum

class RemediationExecutionStepStateEnum(str, Enum):
    SUCCEEDED = "SUCCEEDED"
    PENDING = "PENDING"
    FAILED = "FAILED"

