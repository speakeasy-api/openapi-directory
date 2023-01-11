import dataclasses
from enum import Enum

class ShareStatusEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    REJECTED = "REJECTED"
    PENDING = "PENDING"
    REVOKED = "REVOKED"
    EXPIRED = "EXPIRED"

