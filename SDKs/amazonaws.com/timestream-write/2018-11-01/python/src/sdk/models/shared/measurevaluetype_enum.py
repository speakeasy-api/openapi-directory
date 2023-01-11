import dataclasses
from enum import Enum

class MeasureValueTypeEnum(str, Enum):
    DOUBLE = "DOUBLE"
    BIGINT = "BIGINT"
    VARCHAR = "VARCHAR"
    BOOLEAN = "BOOLEAN"

