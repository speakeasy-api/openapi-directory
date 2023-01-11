import dataclasses
from enum import Enum

class ScheduledActionStateEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DISABLED = "DISABLED"

