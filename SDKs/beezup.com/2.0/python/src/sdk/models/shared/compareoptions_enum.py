import dataclasses
from enum import Enum

class CompareOptionsEnum(str, Enum):
    NONE = "None"
    IGNORE_CASE = "IgnoreCase"
    IGNORE_NON_SPACE = "IgnoreNonSpace"
    IGNORE_SYMBOLS = "IgnoreSymbols"
    ORDINAL_IGNORE_CASE = "OrdinalIgnoreCase"
    STRING_SORT = "StringSort"
    ORDINAL = "Ordinal"

