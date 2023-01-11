import dataclasses
from enum import Enum

class CompressionTypeValueEnum(str, Enum):
    NONE = "none"
    GZIP = "gzip"

