import dataclasses
from enum import Enum

class OperatorTypeEnum(str, Enum):
    NORMALIZATION = "normalization"
    DBT = "dbt"

