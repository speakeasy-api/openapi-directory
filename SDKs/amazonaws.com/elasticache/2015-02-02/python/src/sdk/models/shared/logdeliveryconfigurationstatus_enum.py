import dataclasses
from enum import Enum

class LogDeliveryConfigurationStatusEnum(str, Enum):
    ACTIVE = "active"
    ENABLING = "enabling"
    MODIFYING = "modifying"
    DISABLING = "disabling"
    ERROR = "error"

