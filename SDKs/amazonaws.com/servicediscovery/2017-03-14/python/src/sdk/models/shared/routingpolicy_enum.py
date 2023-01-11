import dataclasses
from enum import Enum

class RoutingPolicyEnum(str, Enum):
    MULTIVALUE = "MULTIVALUE"
    WEIGHTED = "WEIGHTED"

