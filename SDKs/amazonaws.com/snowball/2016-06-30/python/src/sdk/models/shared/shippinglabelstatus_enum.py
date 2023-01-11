import dataclasses
from enum import Enum

class ShippingLabelStatusEnum(str, Enum):
    IN_PROGRESS = "InProgress"
    TIMED_OUT = "TimedOut"
    SUCCEEDED = "Succeeded"
    FAILED = "Failed"

