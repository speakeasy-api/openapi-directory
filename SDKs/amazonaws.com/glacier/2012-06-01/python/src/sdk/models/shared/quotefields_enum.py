import dataclasses
from enum import Enum

class QuoteFieldsEnum(str, Enum):
    ALWAYS = "ALWAYS"
    ASNEEDED = "ASNEEDED"

