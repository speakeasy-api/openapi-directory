import dataclasses
from enum import Enum

class OperationStatusEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    PENDING = "PENDING"
    SUCCESS = "SUCCESS"
    FAIL = "FAIL"

