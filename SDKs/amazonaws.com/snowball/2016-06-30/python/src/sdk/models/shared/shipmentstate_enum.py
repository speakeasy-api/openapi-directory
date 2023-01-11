import dataclasses
from enum import Enum

class ShipmentStateEnum(str, Enum):
    RECEIVED = "RECEIVED"
    RETURNED = "RETURNED"

