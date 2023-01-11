import dataclasses
from enum import Enum

class DetailStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    PROCESSING = "PROCESSING"
    UNAVAILABLE = "UNAVAILABLE"

