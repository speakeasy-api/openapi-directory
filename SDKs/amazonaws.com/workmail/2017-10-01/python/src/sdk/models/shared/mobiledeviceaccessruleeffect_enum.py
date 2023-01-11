import dataclasses
from enum import Enum

class MobileDeviceAccessRuleEffectEnum(str, Enum):
    ALLOW = "ALLOW"
    DENY = "DENY"

