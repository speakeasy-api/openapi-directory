import dataclasses
from enum import Enum

class ModelStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"

