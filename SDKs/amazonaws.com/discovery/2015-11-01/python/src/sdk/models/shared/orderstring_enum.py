import dataclasses
from enum import Enum

class OrderStringEnum(str, Enum):
    ASC = "ASC"
    DESC = "DESC"

