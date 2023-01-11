import dataclasses
from enum import Enum

class FieldTypeEnum(str, Enum):
    NUMBER = "Number"
    STRING = "String"
    BOOLEAN = "Boolean"

