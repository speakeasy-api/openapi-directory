import dataclasses
from enum import Enum

class FileFormatTypeEnum(str, Enum):
    JSON = "JSON"
    PARQUET = "PARQUET"

