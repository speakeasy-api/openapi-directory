import dataclasses
from enum import Enum

class SourceTypeEnum(str, Enum):
    ALL = "ALL"
    ANY = "ANY"
    NONE = "NONE"

