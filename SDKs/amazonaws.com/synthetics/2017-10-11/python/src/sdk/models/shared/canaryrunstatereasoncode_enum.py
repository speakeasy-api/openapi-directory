import dataclasses
from enum import Enum

class CanaryRunStateReasonCodeEnum(str, Enum):
    CANARY_FAILURE = "CANARY_FAILURE"
    EXECUTION_FAILURE = "EXECUTION_FAILURE"

