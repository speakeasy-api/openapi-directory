import dataclasses
from enum import Enum

class PermissionEnum(str, Enum):
    ADMINISTRATOR = "ADMINISTRATOR"
    VIEWER = "VIEWER"

