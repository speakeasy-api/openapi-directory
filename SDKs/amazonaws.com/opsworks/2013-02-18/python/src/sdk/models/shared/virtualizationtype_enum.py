import dataclasses
from enum import Enum

class VirtualizationTypeEnum(str, Enum):
    PARAVIRTUAL = "paravirtual"
    HVM = "hvm"

