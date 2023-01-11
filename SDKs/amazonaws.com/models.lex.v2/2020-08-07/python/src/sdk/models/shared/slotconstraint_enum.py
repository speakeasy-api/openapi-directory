import dataclasses
from typing import Optional
from enum import Enum

class SlotConstraintEnum(str, Enum):
    REQUIRED = "Required"
    OPTIONAL = "Optional"

