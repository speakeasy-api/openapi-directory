import dataclasses
from enum import Enum

class SourceDataFunctionEnum(str, Enum):
    COPY = "Copy"
    TRIM_TITLE = "TrimTitle"
    MAP = "Map"

