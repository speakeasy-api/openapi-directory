import dataclasses
from enum import Enum

class CustomStepStatusEnum(str, Enum):
    SUCCESS = "SUCCESS"
    FAILURE = "FAILURE"

