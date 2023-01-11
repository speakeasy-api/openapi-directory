import dataclasses
from enum import Enum

class CompressionFormatEnum(str, Enum):
    ZIP = "ZIP"
    GZIP = "GZIP"
    PARQUET = "Parquet"

