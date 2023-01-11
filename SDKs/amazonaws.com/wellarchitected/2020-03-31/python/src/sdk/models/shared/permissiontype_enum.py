import dataclasses
from enum import Enum

class PermissionTypeEnum(str, Enum):
    READONLY = "READONLY"
    CONTRIBUTOR = "CONTRIBUTOR"

