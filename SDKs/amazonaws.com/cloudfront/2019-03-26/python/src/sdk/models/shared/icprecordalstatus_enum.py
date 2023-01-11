import dataclasses
from enum import Enum

class IcpRecordalStatusEnum(str, Enum):
    APPROVED = "APPROVED"
    SUSPENDED = "SUSPENDED"
    PENDING = "PENDING"

