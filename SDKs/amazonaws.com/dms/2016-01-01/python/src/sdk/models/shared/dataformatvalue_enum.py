import dataclasses
from enum import Enum

class DataFormatValueEnum(str, Enum):
    CSV = "csv"
    PARQUET = "parquet"

