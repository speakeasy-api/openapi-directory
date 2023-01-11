import dataclasses
from enum import Enum

class InsightStateEnum(str, Enum):
    ACTIVE = "ACTIVE"
    CLOSED = "CLOSED"

