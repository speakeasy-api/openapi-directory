import dataclasses
from enum import Enum

class LogTypeEnum(str, Enum):
    ALERT = "ALERT"
    FLOW = "FLOW"

