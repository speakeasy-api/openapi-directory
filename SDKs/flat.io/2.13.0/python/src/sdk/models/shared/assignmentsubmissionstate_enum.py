import dataclasses
from enum import Enum

class AssignmentSubmissionStateEnum(str, Enum):
    CREATED = "created"
    TURNED_IN = "turnedIn"
    RETURNED = "returned"

