import dataclasses
from enum import Enum

class TerminologyDataFormatEnum(str, Enum):
    CSV = "CSV"
    TMX = "TMX"

