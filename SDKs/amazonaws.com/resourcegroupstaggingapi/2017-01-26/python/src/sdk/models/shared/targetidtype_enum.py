import dataclasses
from enum import Enum

class TargetIDTypeEnum(str, Enum):
    ACCOUNT = "ACCOUNT"
    OU = "OU"
    ROOT = "ROOT"

