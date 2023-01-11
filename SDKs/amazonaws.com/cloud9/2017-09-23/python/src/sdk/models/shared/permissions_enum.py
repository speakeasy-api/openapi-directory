import dataclasses
from enum import Enum

class PermissionsEnum(str, Enum):
    OWNER = "owner"
    READ_WRITE = "read-write"
    READ_ONLY = "read-only"

