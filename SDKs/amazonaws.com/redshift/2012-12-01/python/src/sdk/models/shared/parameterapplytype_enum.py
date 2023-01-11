import dataclasses
from enum import Enum

class ParameterApplyTypeEnum(str, Enum):
    STATIC = "static"
    DYNAMIC = "dynamic"

