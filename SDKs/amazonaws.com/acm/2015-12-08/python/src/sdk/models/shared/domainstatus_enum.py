import dataclasses
from enum import Enum

class DomainStatusEnum(str, Enum):
    PENDING_VALIDATION = "PENDING_VALIDATION"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"

