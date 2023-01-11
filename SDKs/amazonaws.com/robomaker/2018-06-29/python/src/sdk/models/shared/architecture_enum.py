import dataclasses
from enum import Enum

class ArchitectureEnum(str, Enum):
    X86_64 = "X86_64"
    ARM64 = "ARM64"
    ARMHF = "ARMHF"

