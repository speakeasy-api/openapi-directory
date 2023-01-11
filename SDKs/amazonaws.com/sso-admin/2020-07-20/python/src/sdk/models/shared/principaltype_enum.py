import dataclasses
from enum import Enum

class PrincipalTypeEnum(str, Enum):
    USER = "USER"
    GROUP = "GROUP"

