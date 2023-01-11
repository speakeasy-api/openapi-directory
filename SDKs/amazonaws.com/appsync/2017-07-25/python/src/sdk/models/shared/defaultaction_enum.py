import dataclasses
from enum import Enum

class DefaultActionEnum(str, Enum):
    ALLOW = "ALLOW"
    DENY = "DENY"

