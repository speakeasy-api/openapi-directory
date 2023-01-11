import dataclasses
from enum import Enum

class ExportFormatInQueryGeneralParameterEnum(str, Enum):
    XLSX = "xlsx"
    CSV = "csv"

