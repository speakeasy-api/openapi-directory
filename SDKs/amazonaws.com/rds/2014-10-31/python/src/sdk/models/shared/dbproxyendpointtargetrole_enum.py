import dataclasses
from enum import Enum

class DbProxyEndpointTargetRoleEnum(str, Enum):
    READ_WRITE = "READ_WRITE"
    READ_ONLY = "READ_ONLY"

