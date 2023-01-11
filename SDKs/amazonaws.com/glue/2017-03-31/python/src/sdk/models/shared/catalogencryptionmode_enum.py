import dataclasses
from enum import Enum

class CatalogEncryptionModeEnum(str, Enum):
    DISABLED = "DISABLED"
    SSE_KMS = "SSE-KMS"

