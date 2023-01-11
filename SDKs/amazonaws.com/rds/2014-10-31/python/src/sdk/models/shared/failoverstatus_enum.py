import dataclasses
from enum import Enum

class FailoverStatusEnum(str, Enum):
    PENDING = "pending"
    FAILING_OVER = "failing-over"
    CANCELLING = "cancelling"

