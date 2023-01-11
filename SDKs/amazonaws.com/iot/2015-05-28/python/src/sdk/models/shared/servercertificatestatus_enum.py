import dataclasses
from enum import Enum

class ServerCertificateStatusEnum(str, Enum):
    INVALID = "INVALID"
    VALID = "VALID"

