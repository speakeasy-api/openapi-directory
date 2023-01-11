import dataclasses
from enum import Enum

class MlUserDataEncryptionModeStringEnum(str, Enum):
    DISABLED = "DISABLED"
    SSE_KMS = "SSE-KMS"

