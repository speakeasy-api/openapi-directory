import dataclasses
from enum import Enum

class RenewTypeEnum(str, Enum):
    NONE = "None"
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"

