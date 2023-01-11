import dataclasses
from enum import Enum

class OrderEnum(str, Enum):
    DESC = "desc"
    ASC = "asc"

