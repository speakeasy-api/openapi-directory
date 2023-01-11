import dataclasses
from enum import Enum

class AdvancedSecurityModeTypeEnum(str, Enum):
    OFF = "OFF"
    AUDIT = "AUDIT"
    ENFORCED = "ENFORCED"

