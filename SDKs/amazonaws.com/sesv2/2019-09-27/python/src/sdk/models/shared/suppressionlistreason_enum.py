import dataclasses
from enum import Enum

class SuppressionListReasonEnum(str, Enum):
    BOUNCE = "BOUNCE"
    COMPLAINT = "COMPLAINT"

