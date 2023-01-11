import dataclasses
from enum import Enum

class CustomRoutingDestinationTrafficStateEnum(str, Enum):
    ALLOW = "ALLOW"
    DENY = "DENY"

