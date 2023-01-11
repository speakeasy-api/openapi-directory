import dataclasses
from enum import Enum

class ExitBehaviorEnum(str, Enum):
    FAIL = "FAIL"
    RESTART = "RESTART"

