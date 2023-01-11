import dataclasses
from enum import Enum

class PermissionEnum(str, Enum):
    RO = "ro"
    RW = "rw"

