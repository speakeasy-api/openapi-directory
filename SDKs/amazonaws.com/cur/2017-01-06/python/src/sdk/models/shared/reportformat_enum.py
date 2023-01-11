import dataclasses
from enum import Enum

class ReportFormatEnum(str, Enum):
    TEXT_O_RCSV = "textORcsv"
    PARQUET = "Parquet"

