import dataclasses
from enum import Enum

class InferenceExecutionStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"

