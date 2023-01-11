import dataclasses
from enum import Enum

class WafActionTypeEnum(str, Enum):
    BLOCK = "BLOCK"
    ALLOW = "ALLOW"
    COUNT = "COUNT"

