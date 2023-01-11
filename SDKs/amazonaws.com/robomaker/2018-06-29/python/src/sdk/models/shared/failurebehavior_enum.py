import dataclasses
from enum import Enum

class FailureBehaviorEnum(str, Enum):
    FAIL = "Fail"
    CONTINUE = "Continue"

