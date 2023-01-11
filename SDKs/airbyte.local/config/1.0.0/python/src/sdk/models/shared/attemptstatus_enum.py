import dataclasses
from enum import Enum

class AttemptStatusEnum(str, Enum):
    RUNNING = "running"
    FAILED = "failed"
    SUCCEEDED = "succeeded"

