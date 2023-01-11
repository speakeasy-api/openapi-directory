import dataclasses
from enum import Enum

class OfferingTransactionTypeEnum(str, Enum):
    PURCHASE = "PURCHASE"
    RENEW = "RENEW"
    SYSTEM = "SYSTEM"

