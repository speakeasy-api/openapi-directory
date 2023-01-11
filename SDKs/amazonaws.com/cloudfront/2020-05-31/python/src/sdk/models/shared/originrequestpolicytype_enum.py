import dataclasses
from enum import Enum

class OriginRequestPolicyTypeEnum(str, Enum):
    MANAGED = "managed"
    CUSTOM = "custom"

