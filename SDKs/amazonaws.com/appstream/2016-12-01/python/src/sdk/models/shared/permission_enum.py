import dataclasses
from enum import Enum

class PermissionEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

