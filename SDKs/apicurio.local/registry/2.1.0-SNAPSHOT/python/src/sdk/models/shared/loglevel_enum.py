import dataclasses
from enum import Enum

class LogLevelEnum(str, Enum):
    DEBUG = "DEBUG"
    TRACE = "TRACE"
    WARN = "WARN"
    ERROR = "ERROR"
    SEVERE = "SEVERE"
    WARNING = "WARNING"
    INFO = "INFO"
    CONFIG = "CONFIG"
    FINE = "FINE"
    FINER = "FINER"
    FINEST = "FINEST"

