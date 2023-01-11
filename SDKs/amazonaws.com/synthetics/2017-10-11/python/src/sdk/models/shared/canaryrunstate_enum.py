import dataclasses
from enum import Enum

class CanaryRunStateEnum(str, Enum):
    RUNNING = "RUNNING"
    PASSED = "PASSED"
    FAILED = "FAILED"

