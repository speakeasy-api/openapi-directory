import dataclasses
from enum import Enum

class ApprovalModelEnum(str, Enum):
    AUTOMATIC = "AUTOMATIC"
    MANUAL = "MANUAL"

