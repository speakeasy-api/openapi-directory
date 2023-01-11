import dataclasses
from enum import Enum

class ProductStateFilterEnum(str, Enum):
    ALL = "All"
    ENABLED = "Enabled"
    DISABLED = "Disabled"

