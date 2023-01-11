import dataclasses
from enum import Enum

class TriggerTypeEnum(str, Enum):
    SCHEDULED = "Scheduled"
    EVENT = "Event"
    ON_DEMAND = "OnDemand"

