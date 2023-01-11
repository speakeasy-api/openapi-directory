import dataclasses
from enum import Enum

class KeyUsageTypeEnum(str, Enum):
    SIGN_VERIFY = "SIGN_VERIFY"
    ENCRYPT_DECRYPT = "ENCRYPT_DECRYPT"

