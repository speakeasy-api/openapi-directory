import dataclasses
from enum import Enum

class JobStatusEnum(str, Enum):
    RUNNING = "RUNNING"
    PAUSED = "PAUSED"
    CANCELLED = "CANCELLED"
    COMPLETE = "COMPLETE"
    IDLE = "IDLE"
    USER_PAUSED = "USER_PAUSED"

