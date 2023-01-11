import dataclasses
from enum import Enum

class ParameterTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    NODE_TYPE_SPECIFIC = "NODE_TYPE_SPECIFIC"

