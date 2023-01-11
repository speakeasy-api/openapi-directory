import dataclasses
from enum import Enum

class CsvHeaderOptionEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    PRESENT = "PRESENT"
    ABSENT = "ABSENT"

