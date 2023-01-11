import dataclasses
from enum import Enum

class ParallelDataFormatEnum(str, Enum):
    TSV = "TSV"
    CSV = "CSV"
    TMX = "TMX"

