import dataclasses
from enum import Enum

class OperationEnum(str, Enum):
    REPLACE = "replace"
    REMOVE = "remove"

