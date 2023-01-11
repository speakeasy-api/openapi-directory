import dataclasses
from enum import Enum

class JobStatusEnum(str, Enum):
    PENDING = "pending"
    RUNNING = "running"
    INCOMPLETE = "incomplete"
    FAILED = "failed"
    SUCCEEDED = "succeeded"
    CANCELLED = "cancelled"

