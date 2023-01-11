import dataclasses
from enum import Enum

class TaskStateEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    CANCELED = "CANCELED"
    COMPLETED = "COMPLETED"

