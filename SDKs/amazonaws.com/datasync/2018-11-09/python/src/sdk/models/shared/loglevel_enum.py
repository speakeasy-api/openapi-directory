import dataclasses
from enum import Enum

class LogLevelEnum(str, Enum):
    OFF = "OFF"
    BASIC = "BASIC"
    TRANSFER = "TRANSFER"

