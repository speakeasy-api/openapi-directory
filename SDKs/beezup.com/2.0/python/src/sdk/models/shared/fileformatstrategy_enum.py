import dataclasses
from enum import Enum

class FileFormatStrategyEnum(str, Enum):
    UNKNOWN = "Unknown"
    CSV = "Csv"
    XML = "Xml"
    JSON = "Json"

