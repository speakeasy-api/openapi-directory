import dataclasses
from enum import Enum

class PolicyOwnerEntityTypeEnum(str, Enum):
    USER = "USER"
    ROLE = "ROLE"
    GROUP = "GROUP"

