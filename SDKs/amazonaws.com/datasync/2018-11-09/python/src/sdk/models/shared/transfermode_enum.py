import dataclasses
from enum import Enum

class TransferModeEnum(str, Enum):
    CHANGED = "CHANGED"
    ALL = "ALL"

