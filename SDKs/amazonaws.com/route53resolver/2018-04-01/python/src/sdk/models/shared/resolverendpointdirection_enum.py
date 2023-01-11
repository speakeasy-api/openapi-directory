import dataclasses
from enum import Enum

class ResolverEndpointDirectionEnum(str, Enum):
    INBOUND = "INBOUND"
    OUTBOUND = "OUTBOUND"

