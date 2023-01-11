import dataclasses
from enum import Enum

class AlarmModelVersionStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    ACTIVATING = "ACTIVATING"
    INACTIVE = "INACTIVE"
    FAILED = "FAILED"

