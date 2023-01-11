import dataclasses
from enum import Enum

class ReviewableHitStatusEnum(str, Enum):
    REVIEWABLE = "Reviewable"
    REVIEWING = "Reviewing"

