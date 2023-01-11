import dataclasses
from enum import Enum

class StatusEnum(str, Enum):
    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    FAILED = "Failed"
    CANCELLED = "Cancelled"
    CANCELLING = "Cancelling"

