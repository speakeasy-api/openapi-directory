import dataclasses
from enum import Enum

class BillingMethodEnum(str, Enum):
    METERED = "METERED"
    UNMETERED = "UNMETERED"

