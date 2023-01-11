import dataclasses
from enum import Enum

class LifecyclePolicyPreviewStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETE = "COMPLETE"
    EXPIRED = "EXPIRED"
    FAILED = "FAILED"

