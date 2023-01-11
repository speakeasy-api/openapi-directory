import dataclasses
from enum import Enum

class BackupStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    OK = "OK"
    FAILED = "FAILED"
    DELETING = "DELETING"

