import dataclasses
from enum import Enum

class LicenseDeletionStatusEnum(str, Enum):
    PENDING_DELETE = "PENDING_DELETE"
    DELETED = "DELETED"

