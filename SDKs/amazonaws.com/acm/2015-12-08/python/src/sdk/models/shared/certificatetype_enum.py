import dataclasses
from enum import Enum

class CertificateTypeEnum(str, Enum):
    IMPORTED = "IMPORTED"
    AMAZON_ISSUED = "AMAZON_ISSUED"
    PRIVATE = "PRIVATE"

