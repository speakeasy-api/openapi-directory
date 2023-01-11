import dataclasses
from enum import Enum

class ProtectionGroupPatternEnum(str, Enum):
    ALL = "ALL"
    ARBITRARY = "ARBITRARY"
    BY_RESOURCE_TYPE = "BY_RESOURCE_TYPE"

