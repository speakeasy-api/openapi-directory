import dataclasses
from enum import Enum

class NotificationStateEnum(str, Enum):
    OK = "OK"
    ALARM = "ALARM"

