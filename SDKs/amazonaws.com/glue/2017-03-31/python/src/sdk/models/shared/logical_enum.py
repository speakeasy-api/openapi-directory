import dataclasses
from enum import Enum

class LogicalEnum(str, Enum):
    AND = "AND"
    ANY = "ANY"

