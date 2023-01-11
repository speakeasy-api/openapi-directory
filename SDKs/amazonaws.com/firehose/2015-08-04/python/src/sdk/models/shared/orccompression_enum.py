import dataclasses
from enum import Enum

class OrcCompressionEnum(str, Enum):
    NONE = "NONE"
    ZLIB = "ZLIB"
    SNAPPY = "SNAPPY"

