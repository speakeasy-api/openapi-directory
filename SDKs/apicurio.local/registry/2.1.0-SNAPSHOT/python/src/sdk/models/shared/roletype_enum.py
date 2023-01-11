import dataclasses
from enum import Enum

class RoleTypeEnum(str, Enum):
    READ_ONLY = "READ_ONLY"
    DEVELOPER = "DEVELOPER"
    ADMIN = "ADMIN"

