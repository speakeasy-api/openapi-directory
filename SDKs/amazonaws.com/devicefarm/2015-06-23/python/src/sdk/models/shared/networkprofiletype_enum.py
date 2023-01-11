import dataclasses
from enum import Enum

class NetworkProfileTypeEnum(str, Enum):
    CURATED = "CURATED"
    PRIVATE = "PRIVATE"

