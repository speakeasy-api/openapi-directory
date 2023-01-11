import dataclasses
from enum import Enum

class UploadStatusEnum(str, Enum):
    INITIALIZED = "INITIALIZED"
    PROCESSING = "PROCESSING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

