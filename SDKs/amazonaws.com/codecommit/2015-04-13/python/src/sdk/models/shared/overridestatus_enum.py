import dataclasses
from enum import Enum

class OverrideStatusEnum(str, Enum):
    OVERRIDE = "OVERRIDE"
    REVOKE = "REVOKE"

