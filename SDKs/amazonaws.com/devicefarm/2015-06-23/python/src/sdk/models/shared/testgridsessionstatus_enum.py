import dataclasses
from enum import Enum

class TestGridSessionStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    CLOSED = "CLOSED"
    ERRORED = "ERRORED"

