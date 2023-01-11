import dataclasses
from enum import Enum

class LogFilterEnum(str, Enum):
    ERROR = "ERROR"
    WARN = "WARN"
    INFO = "INFO"

