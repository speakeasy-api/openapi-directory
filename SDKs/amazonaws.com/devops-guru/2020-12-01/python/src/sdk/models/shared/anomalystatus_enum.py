import dataclasses
from enum import Enum

class AnomalyStatusEnum(str, Enum):
    ONGOING = "ONGOING"
    CLOSED = "CLOSED"

