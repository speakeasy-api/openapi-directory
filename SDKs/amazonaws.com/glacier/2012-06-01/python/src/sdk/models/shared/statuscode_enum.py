import dataclasses
from enum import Enum

class StatusCodeEnum(str, Enum):
    IN_PROGRESS = "InProgress"
    SUCCEEDED = "Succeeded"
    FAILED = "Failed"

