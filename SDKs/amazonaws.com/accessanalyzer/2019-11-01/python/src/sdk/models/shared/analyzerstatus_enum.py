import dataclasses
from enum import Enum

class AnalyzerStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    CREATING = "CREATING"
    DISABLED = "DISABLED"
    FAILED = "FAILED"

