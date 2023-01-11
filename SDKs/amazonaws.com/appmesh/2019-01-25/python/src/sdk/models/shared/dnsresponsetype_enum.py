import dataclasses
from enum import Enum

class DNSResponseTypeEnum(str, Enum):
    LOADBALANCER = "LOADBALANCER"
    ENDPOINTS = "ENDPOINTS"

