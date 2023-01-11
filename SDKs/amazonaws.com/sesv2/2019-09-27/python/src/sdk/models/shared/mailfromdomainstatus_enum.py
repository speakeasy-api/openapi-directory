import dataclasses
from enum import Enum

class MailFromDomainStatusEnum(str, Enum):
    PENDING = "PENDING"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"
    TEMPORARY_FAILURE = "TEMPORARY_FAILURE"

