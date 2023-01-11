import dataclasses
from enum import Enum

class DedicatedTenancyModificationStateEnumEnum(str, Enum):
    PENDING = "PENDING"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"

