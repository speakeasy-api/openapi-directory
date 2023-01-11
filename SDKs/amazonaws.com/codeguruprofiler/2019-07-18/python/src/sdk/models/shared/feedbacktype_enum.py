import dataclasses
from enum import Enum

class FeedbackTypeEnum(str, Enum):
    POSITIVE = "Positive"
    NEGATIVE = "Negative"

