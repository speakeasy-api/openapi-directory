import dataclasses
from enum import Enum

class EncryptionStatusEnum(str, Enum):
    UPDATING = "UPDATING"
    ACTIVE = "ACTIVE"

