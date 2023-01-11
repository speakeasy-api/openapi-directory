import dataclasses
from enum import Enum

class ManagedCredentialsActionEnum(str, Enum):
    ENABLE = "ENABLE"
    DISABLE = "DISABLE"

