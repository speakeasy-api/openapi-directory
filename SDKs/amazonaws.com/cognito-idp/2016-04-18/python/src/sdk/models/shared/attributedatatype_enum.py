import dataclasses
from enum import Enum

class AttributeDataTypeEnum(str, Enum):
    STRING = "String"
    NUMBER = "Number"
    DATE_TIME = "DateTime"
    BOOLEAN = "Boolean"

