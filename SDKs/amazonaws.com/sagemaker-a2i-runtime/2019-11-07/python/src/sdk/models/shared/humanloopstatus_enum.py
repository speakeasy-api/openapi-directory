import dataclasses
from enum import Enum

class HumanLoopStatusEnum(str, Enum):
    IN_PROGRESS = "InProgress"
    FAILED = "Failed"
    COMPLETED = "Completed"
    STOPPED = "Stopped"
    STOPPING = "Stopping"

