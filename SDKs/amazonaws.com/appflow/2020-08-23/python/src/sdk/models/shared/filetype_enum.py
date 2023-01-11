import dataclasses
from enum import Enum

class FileTypeEnum(str, Enum):
    CSV = "CSV"
    JSON = "JSON"
    PARQUET = "PARQUET"

