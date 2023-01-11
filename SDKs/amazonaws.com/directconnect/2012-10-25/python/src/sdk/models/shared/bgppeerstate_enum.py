import dataclasses
from enum import Enum

class BgpPeerStateEnum(str, Enum):
    VERIFYING = "verifying"
    PENDING = "pending"
    AVAILABLE = "available"
    DELETING = "deleting"
    DELETED = "deleted"

