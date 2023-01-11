import dataclasses
from enum import Enum

class AutoSnapshotStatusEnum(str, Enum):
    SUCCESS = "Success"
    FAILED = "Failed"
    IN_PROGRESS = "InProgress"
    NOT_FOUND = "NotFound"

