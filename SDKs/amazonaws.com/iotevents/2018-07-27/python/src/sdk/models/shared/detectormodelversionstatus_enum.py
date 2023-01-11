import dataclasses
from enum import Enum

class DetectorModelVersionStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    ACTIVATING = "ACTIVATING"
    INACTIVE = "INACTIVE"
    DEPRECATED = "DEPRECATED"
    DRAFT = "DRAFT"
    PAUSED = "PAUSED"
    FAILED = "FAILED"

