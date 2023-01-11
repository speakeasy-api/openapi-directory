import dataclasses
from enum import Enum

class APICacheStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    CREATING = "CREATING"
    DELETING = "DELETING"
    MODIFYING = "MODIFYING"
    FAILED = "FAILED"

