import dataclasses
from enum import Enum

class SubscriptionStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"

