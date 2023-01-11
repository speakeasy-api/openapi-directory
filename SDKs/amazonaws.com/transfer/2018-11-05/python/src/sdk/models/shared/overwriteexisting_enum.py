import dataclasses
from enum import Enum

class OverwriteExistingEnum(str, Enum):
    TRUE = "TRUE"
    FALSE = "FALSE"

