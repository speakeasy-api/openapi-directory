import dataclasses
from enum import Enum

class TenancyEnum(str, Enum):
    DEDICATED = "DEDICATED"
    SHARED = "SHARED"

