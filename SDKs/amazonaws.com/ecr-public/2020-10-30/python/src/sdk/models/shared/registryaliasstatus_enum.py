import dataclasses
from enum import Enum

class RegistryAliasStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    PENDING = "PENDING"
    REJECTED = "REJECTED"

