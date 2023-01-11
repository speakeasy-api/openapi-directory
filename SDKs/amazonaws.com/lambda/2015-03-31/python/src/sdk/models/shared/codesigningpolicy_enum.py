import dataclasses
from enum import Enum

class CodeSigningPolicyEnum(str, Enum):
    WARN = "Warn"
    ENFORCE = "Enforce"

