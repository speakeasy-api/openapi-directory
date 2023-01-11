import dataclasses
from enum import Enum

class ConsumptionAvailabilityStatusEnum(str, Enum):
    AVAILABLE = "Available"
    DEGRADED = "Degraded"
    UNAVAILABLE = "Unavailable"

