import dataclasses
from enum import Enum

class IngestionModeEnum(str, Enum):
    BULK = "BULK"
    PUT = "PUT"
    ALL = "ALL"

