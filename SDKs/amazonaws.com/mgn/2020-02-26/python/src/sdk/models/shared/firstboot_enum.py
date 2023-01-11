import dataclasses
from enum import Enum

class FirstBootEnum(str, Enum):
    WAITING = "WAITING"
    SUCCEEDED = "SUCCEEDED"
    UNKNOWN = "UNKNOWN"
    STOPPED = "STOPPED"

