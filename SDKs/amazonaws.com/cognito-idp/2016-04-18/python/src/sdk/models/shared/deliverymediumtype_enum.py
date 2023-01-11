import dataclasses
from enum import Enum

class DeliveryMediumTypeEnum(str, Enum):
    SMS = "SMS"
    EMAIL = "EMAIL"

