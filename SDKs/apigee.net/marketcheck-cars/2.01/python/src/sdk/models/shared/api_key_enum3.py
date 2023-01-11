import dataclasses
from enum import Enum

class APIKeyEnum3(str, Enum):
    LEASE = "lease"
    FINANCE = "finance"
    CASH = "cash"

