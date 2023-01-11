import dataclasses
from enum import Enum

class FormatEnum(str, Enum):
    CSV = "CSV"
    JSON = "JSON"

