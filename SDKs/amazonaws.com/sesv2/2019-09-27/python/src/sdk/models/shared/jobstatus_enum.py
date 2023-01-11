import dataclasses
from enum import Enum

class JobStatusEnum(str, Enum):
    CREATED = "CREATED"
    PROCESSING = "PROCESSING"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"

