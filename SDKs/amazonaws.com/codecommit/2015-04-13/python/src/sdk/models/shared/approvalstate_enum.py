import dataclasses
from enum import Enum

class ApprovalStateEnum(str, Enum):
    APPROVE = "APPROVE"
    REVOKE = "REVOKE"

