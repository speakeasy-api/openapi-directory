import dataclasses
from enum import Enum

class CapacityProviderStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

