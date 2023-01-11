import dataclasses
from enum import Enum

class AlarmStateEnum(str, Enum):
    OK = "OK"
    ALARM = "ALARM"
    INSUFFICIENT_DATA = "INSUFFICIENT_DATA"

