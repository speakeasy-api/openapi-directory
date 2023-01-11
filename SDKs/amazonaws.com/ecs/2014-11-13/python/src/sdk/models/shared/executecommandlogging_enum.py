import dataclasses
from enum import Enum

class ExecuteCommandLoggingEnum(str, Enum):
    NONE = "NONE"
    DEFAULT = "DEFAULT"
    OVERRIDE = "OVERRIDE"

