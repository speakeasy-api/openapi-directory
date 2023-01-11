import dataclasses
from enum import Enum

class SnapshotStatusEnum(str, Enum):
    CREATING = "Creating"
    COMPLETED = "Completed"
    FAILED = "Failed"

