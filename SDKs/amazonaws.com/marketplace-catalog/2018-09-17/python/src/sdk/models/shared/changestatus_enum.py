import dataclasses
from enum import Enum

class ChangeStatusEnum(str, Enum):
    PREPARING = "PREPARING"
    APPLYING = "APPLYING"
    SUCCEEDED = "SUCCEEDED"
    CANCELLED = "CANCELLED"
    FAILED = "FAILED"

