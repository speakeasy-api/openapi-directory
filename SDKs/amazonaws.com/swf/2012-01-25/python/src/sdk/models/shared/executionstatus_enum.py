import dataclasses
from enum import Enum

class ExecutionStatusEnum(str, Enum):
    OPEN = "OPEN"
    CLOSED = "CLOSED"

