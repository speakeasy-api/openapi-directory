import dataclasses
from enum import Enum

class CertificateTypeEnum(str, Enum):
    DISABLED = "DISABLED"
    GENERATED = "GENERATED"

