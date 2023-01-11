import dataclasses
from enum import Enum

class StageRetryModeEnum(str, Enum):
    FAILED_ACTIONS = "FAILED_ACTIONS"

