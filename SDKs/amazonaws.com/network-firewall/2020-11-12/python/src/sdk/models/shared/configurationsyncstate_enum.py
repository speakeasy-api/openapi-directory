import dataclasses
from enum import Enum

class ConfigurationSyncStateEnum(str, Enum):
    PENDING = "PENDING"
    IN_SYNC = "IN_SYNC"

