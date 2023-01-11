import dataclasses
from enum import Enum

class UnitEnum(str, Enum):
    BITS = "BITS"
    BYTES = "BYTES"
    PACKETS = "PACKETS"
    REQUESTS = "REQUESTS"

