import dataclasses
from enum import Enum

class EvaluationTypeEnum(str, Enum):
    STATIC = "STATIC"
    DYNAMIC = "DYNAMIC"

