import dataclasses
from enum import Enum

class ExportDataFormatEnum(str, Enum):
    CSV = "CSV"
    GRAPHML = "GRAPHML"

