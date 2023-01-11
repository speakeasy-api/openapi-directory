import dataclasses
from enum import Enum

class AssignmentTypeEnum(str, Enum):
    NONE = "none"
    NEW_SCORE = "newScore"
    SCORE_TEMPLATE = "scoreTemplate"
    SHARED_WRITING = "sharedWriting"
    WORKSHEET = "worksheet"
    PERFORMANCE = "performance"

