import dataclasses
from enum import Enum

class PreviewStatusEnum(str, Enum):
    WORK_IN_PROGRESS = "WORK_IN_PROGRESS"
    COMPLETED = "COMPLETED"

