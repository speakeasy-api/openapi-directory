import dataclasses
from enum import Enum

class AnalysisStatusEnum(str, Enum):
    RUNNING = "RUNNING"
    COMPLETE = "COMPLETE"
    FAILED = "FAILED"

