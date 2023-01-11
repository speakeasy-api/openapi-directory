import dataclasses
from enum import Enum

class EncryptionTypeEnum(str, Enum):
    NONE = "NONE"
    AES256 = "AES256"
    AWS_KMS = "aws:kms"
    UNKNOWN = "UNKNOWN"

