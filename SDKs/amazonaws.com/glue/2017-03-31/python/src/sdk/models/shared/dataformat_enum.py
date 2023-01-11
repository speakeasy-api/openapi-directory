import dataclasses
from enum import Enum

class DataFormatEnum(str, Enum):
    AVRO = "AVRO"
    JSON = "JSON"

