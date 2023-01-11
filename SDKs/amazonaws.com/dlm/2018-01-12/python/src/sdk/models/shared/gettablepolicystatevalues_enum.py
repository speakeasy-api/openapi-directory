import dataclasses
from enum import Enum

class GettablePolicyStateValuesEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    ERROR = "ERROR"

