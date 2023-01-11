import dataclasses
from enum import Enum

class AppPkgOperationalStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

