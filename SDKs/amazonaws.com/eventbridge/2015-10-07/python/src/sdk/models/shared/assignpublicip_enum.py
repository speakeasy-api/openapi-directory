import dataclasses
from enum import Enum

class AssignPublicIPEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

