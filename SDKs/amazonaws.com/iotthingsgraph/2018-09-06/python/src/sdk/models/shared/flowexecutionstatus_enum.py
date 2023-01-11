import dataclasses
from enum import Enum

class FlowExecutionStatusEnum(str, Enum):
    RUNNING = "RUNNING"
    ABORTED = "ABORTED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

