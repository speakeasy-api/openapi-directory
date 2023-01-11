import dataclasses
from enum import Enum

class CharLengthSemanticsEnum(str, Enum):
    DEFAULT = "default"
    CHAR = "char"
    BYTE = "byte"

