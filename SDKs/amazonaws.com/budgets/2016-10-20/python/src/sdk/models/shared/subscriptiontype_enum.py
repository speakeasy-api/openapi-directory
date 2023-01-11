import dataclasses
from enum import Enum

class SubscriptionTypeEnum(str, Enum):
    SNS = "SNS"
    EMAIL = "EMAIL"

