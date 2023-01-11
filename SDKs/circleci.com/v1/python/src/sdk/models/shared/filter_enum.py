import dataclasses
from enum import Enum

class FilterEnum(str, Enum):
    COMPLETED = "completed"
    SUCCESSFUL = "successful"
    FAILED = "failed"
    RUNNING = "running"

