import dataclasses
from enum import Enum

class ColumnNullableEnum(str, Enum):
    NOT_NULL = "NOT_NULL"
    NULLABLE = "NULLABLE"
    UNKNOWN = "UNKNOWN"

