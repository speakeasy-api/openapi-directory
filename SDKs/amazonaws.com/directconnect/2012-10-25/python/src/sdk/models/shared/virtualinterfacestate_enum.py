import dataclasses
from enum import Enum

class VirtualInterfaceStateEnum(str, Enum):
    CONFIRMING = "confirming"
    VERIFYING = "verifying"
    PENDING = "pending"
    AVAILABLE = "available"
    DOWN = "down"
    DELETING = "deleting"
    DELETED = "deleted"
    REJECTED = "rejected"
    UNKNOWN = "unknown"

