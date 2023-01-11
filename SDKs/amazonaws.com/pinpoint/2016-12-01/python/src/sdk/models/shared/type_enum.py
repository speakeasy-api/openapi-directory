import dataclasses
from enum import Enum

class TypeEnum(str, Enum):
    ALL = "ALL"
    ANY = "ANY"
    NONE = "NONE"

