import dataclasses
from enum import Enum

class RecorderStatusEnum(str, Enum):
    PENDING = "Pending"
    SUCCESS = "Success"
    FAILURE = "Failure"

