import dataclasses
from enum import Enum

class PolicyTypeEnum(str, Enum):
    RULE_BASED = "RuleBased"
    TARGET_BASED = "TargetBased"

