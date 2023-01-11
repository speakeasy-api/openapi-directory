import dataclasses
from enum import Enum

class AccessPropertyValueEnum(str, Enum):
    ALLOW = "ALLOW"
    DENY = "DENY"

