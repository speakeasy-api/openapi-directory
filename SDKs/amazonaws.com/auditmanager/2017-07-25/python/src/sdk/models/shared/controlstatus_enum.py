import dataclasses
from enum import Enum

class ControlStatusEnum(str, Enum):
    UNDER_REVIEW = "UNDER_REVIEW"
    REVIEWED = "REVIEWED"
    INACTIVE = "INACTIVE"

