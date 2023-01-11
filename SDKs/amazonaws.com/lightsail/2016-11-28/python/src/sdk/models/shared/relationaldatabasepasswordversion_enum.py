import dataclasses
from enum import Enum

class RelationalDatabasePasswordVersionEnum(str, Enum):
    CURRENT = "CURRENT"
    PREVIOUS = "PREVIOUS"
    PENDING = "PENDING"

