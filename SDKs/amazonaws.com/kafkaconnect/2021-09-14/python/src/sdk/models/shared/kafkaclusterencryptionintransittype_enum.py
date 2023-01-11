import dataclasses
from enum import Enum

class KafkaClusterEncryptionInTransitTypeEnum(str, Enum):
    PLAINTEXT = "PLAINTEXT"
    TLS = "TLS"

