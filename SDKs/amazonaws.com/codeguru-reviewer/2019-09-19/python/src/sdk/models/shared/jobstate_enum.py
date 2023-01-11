import dataclasses
from enum import Enum

class JobStateEnum(str, Enum):
    COMPLETED = "Completed"
    PENDING = "Pending"
    FAILED = "Failed"
    DELETING = "Deleting"

