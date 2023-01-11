import dataclasses
from enum import Enum

class LoadBalancerTypeEnumEnum(str, Enum):
    APPLICATION = "application"
    NETWORK = "network"
    GATEWAY = "gateway"

