import dataclasses
from enum import Enum

class IndexFieldTypeEnum(str, Enum):
    UINT = "uint"
    LITERAL = "literal"
    TEXT = "text"

