import dataclasses
from enum import Enum

class InsightStatusEnum(str, Enum):
    ONGOING = "ONGOING"
    CLOSED = "CLOSED"

