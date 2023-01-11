import dataclasses
from enum import Enum

class TaskStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    CREATING = "CREATING"
    QUEUED = "QUEUED"
    RUNNING = "RUNNING"
    UNAVAILABLE = "UNAVAILABLE"

