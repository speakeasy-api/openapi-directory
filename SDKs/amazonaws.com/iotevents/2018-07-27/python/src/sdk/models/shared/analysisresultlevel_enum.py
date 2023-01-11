import dataclasses
from enum import Enum

class AnalysisResultLevelEnum(str, Enum):
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"

