import dataclasses
from enum import Enum

class CancellationStatusEnum(str, Enum):
    CANCELLING = "CANCELLING"
    CANCELLED = "CANCELLED"

