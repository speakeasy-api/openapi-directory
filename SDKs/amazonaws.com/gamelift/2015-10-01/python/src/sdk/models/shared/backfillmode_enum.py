import dataclasses
from enum import Enum

class BackfillModeEnum(str, Enum):
    AUTOMATIC = "AUTOMATIC"
    MANUAL = "MANUAL"

