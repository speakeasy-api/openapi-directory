import dataclasses
from enum import Enum

class ResourceTypeEnum(str, Enum):
    GPU = "GPU"
    VCPU = "VCPU"
    MEMORY = "MEMORY"

