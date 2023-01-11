import dataclasses
from enum import Enum

class DiskSnapshotStateEnum(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    ERROR = "error"
    UNKNOWN = "unknown"

