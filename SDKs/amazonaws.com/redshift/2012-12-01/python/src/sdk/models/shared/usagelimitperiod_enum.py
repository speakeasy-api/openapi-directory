import dataclasses
from enum import Enum

class UsageLimitPeriodEnum(str, Enum):
    DAILY = "daily"
    WEEKLY = "weekly"
    MONTHLY = "monthly"

