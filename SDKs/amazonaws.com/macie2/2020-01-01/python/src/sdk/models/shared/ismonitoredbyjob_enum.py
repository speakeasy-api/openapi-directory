import dataclasses
from enum import Enum

class IsMonitoredByJobEnum(str, Enum):
    TRUE = "TRUE"
    FALSE = "FALSE"
    UNKNOWN = "UNKNOWN"

