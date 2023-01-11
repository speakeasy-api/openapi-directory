import dataclasses
from enum import Enum

class RegistryStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    DELETING = "DELETING"

