import dataclasses
from enum import Enum

class JobStatusEnum(str, Enum):
    PENDING = "PENDING"
    STARTED = "STARTED"
    COMPLETED = "COMPLETED"

