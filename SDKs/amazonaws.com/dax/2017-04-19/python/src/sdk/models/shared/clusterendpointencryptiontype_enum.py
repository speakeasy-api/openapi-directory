import dataclasses
from enum import Enum

class ClusterEndpointEncryptionTypeEnum(str, Enum):
    NONE = "NONE"
    TLS = "TLS"

