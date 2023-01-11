import dataclasses
from enum import Enum

class CertificateAuthorityTypeEnum(str, Enum):
    ROOT = "ROOT"
    SUBORDINATE = "SUBORDINATE"

