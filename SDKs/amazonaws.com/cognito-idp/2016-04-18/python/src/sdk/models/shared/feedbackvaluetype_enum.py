import dataclasses
from enum import Enum

class FeedbackValueTypeEnum(str, Enum):
    VALID = "Valid"
    INVALID = "Invalid"

