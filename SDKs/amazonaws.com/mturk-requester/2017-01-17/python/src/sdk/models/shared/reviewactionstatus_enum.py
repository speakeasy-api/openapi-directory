import dataclasses
from enum import Enum

class ReviewActionStatusEnum(str, Enum):
    INTENDED = "Intended"
    SUCCEEDED = "Succeeded"
    FAILED = "Failed"
    CANCELLED = "Cancelled"

