import dataclasses
from enum import Enum

class ReplicationRunStateEnum(str, Enum):
    PENDING = "PENDING"
    MISSED = "MISSED"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"
    DELETING = "DELETING"
    DELETED = "DELETED"

