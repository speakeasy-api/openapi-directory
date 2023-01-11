import dataclasses
from enum import Enum

class ConfigurationEventStatusEnum(str, Enum):
    INFO = "INFO"
    WARN = "WARN"
    ERROR = "ERROR"

