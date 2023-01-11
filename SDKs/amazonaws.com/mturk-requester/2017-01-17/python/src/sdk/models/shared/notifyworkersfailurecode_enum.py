import dataclasses
from enum import Enum

class NotifyWorkersFailureCodeEnum(str, Enum):
    SOFT_FAILURE = "SoftFailure"
    HARD_FAILURE = "HardFailure"

