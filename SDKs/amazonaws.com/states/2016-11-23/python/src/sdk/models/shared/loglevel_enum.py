import dataclasses
from enum import Enum

class LogLevelEnum(str, Enum):
    ALL = "ALL"
    ERROR = "ERROR"
    FATAL = "FATAL"
    OFF = "OFF"

