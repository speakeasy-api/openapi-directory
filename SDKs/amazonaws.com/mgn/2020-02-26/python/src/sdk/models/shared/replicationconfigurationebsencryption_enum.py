import dataclasses
from enum import Enum

class ReplicationConfigurationEbsEncryptionEnum(str, Enum):
    DEFAULT = "DEFAULT"
    CUSTOM = "CUSTOM"

