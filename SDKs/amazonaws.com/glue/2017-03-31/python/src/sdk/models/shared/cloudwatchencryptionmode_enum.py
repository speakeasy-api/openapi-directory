import dataclasses
from enum import Enum

class CloudWatchEncryptionModeEnum(str, Enum):
    DISABLED = "DISABLED"
    SSE_KMS = "SSE-KMS"

