import dataclasses
from enum import Enum

class EncryptionTypeEnum(str, Enum):
    AWS_KMS = "aws:kms"
    AES256 = "AES256"

