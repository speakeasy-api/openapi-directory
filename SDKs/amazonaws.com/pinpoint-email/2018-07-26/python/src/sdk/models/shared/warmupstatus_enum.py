import dataclasses
from enum import Enum

class WarmupStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    DONE = "DONE"

