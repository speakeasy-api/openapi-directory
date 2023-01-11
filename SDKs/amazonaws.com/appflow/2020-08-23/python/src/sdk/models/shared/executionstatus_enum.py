import dataclasses
from enum import Enum

class ExecutionStatusEnum(str, Enum):
    IN_PROGRESS = "InProgress"
    SUCCESSFUL = "Successful"
    ERROR = "Error"

