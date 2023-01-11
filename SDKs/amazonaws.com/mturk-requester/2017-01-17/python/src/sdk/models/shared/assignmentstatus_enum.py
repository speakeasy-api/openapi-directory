import dataclasses
from enum import Enum

class AssignmentStatusEnum(str, Enum):
    SUBMITTED = "Submitted"
    APPROVED = "Approved"
    REJECTED = "Rejected"

