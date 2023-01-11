import dataclasses
from enum import Enum

class GeneratedRulesTypeEnum(str, Enum):
    ALLOWLIST = "ALLOWLIST"
    DENYLIST = "DENYLIST"

