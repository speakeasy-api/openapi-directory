import dataclasses
from enum import Enum

class ApprovalStatusEnum(str, Enum):
    APPROVED = "Approved"
    REJECTED = "Rejected"

