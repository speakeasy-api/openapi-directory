import dataclasses
from enum import Enum

class AccessPreviewStatusEnum(str, Enum):
    COMPLETED = "COMPLETED"
    CREATING = "CREATING"
    FAILED = "FAILED"

