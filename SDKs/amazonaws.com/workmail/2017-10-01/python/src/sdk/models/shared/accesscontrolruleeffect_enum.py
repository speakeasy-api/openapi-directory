import dataclasses
from enum import Enum

class AccessControlRuleEffectEnum(str, Enum):
    ALLOW = "ALLOW"
    DENY = "DENY"

