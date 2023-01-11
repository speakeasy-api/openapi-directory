import dataclasses
from enum import Enum

class ScoreTrackStateEnum(str, Enum):
    DRAFT = "draft"
    COMPLETED = "completed"
    DELETED = "deleted"

