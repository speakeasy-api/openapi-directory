import dataclasses
from enum import Enum

class RegistrationStatusEnum(str, Enum):
    REGISTERED = "Registered"
    DEREGISTERED = "Deregistered"

