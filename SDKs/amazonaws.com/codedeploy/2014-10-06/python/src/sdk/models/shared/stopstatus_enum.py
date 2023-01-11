import dataclasses
from enum import Enum

class StopStatusEnum(str, Enum):
    PENDING = "Pending"
    SUCCEEDED = "Succeeded"

