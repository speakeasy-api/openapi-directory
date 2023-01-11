import dataclasses
from enum import Enum

class NotificationTypeEnum(str, Enum):
    ACTUAL = "ACTUAL"
    FORECASTED = "FORECASTED"

