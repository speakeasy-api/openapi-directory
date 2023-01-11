import dataclasses
from enum import Enum

class JobBookmarksEncryptionModeEnum(str, Enum):
    DISABLED = "DISABLED"
    CSE_KMS = "CSE-KMS"

