import dataclasses
from enum import Enum

class HitStatusEnum(str, Enum):
    ASSIGNABLE = "Assignable"
    UNASSIGNABLE = "Unassignable"
    REVIEWABLE = "Reviewable"
    REVIEWING = "Reviewing"
    DISPOSED = "Disposed"

