import dataclasses
from enum import Enum

class IamAuthModeEnum(str, Enum):
    DISABLED = "DISABLED"
    REQUIRED = "REQUIRED"

