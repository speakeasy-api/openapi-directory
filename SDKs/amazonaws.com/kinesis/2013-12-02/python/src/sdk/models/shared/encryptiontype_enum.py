import dataclasses
from enum import Enum

class EncryptionTypeEnum(str, Enum):
    NONE = "NONE"
    KMS = "KMS"

