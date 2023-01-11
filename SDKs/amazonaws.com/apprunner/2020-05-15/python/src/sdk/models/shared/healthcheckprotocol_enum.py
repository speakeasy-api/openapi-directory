import dataclasses
from enum import Enum

class HealthCheckProtocolEnum(str, Enum):
    TCP = "TCP"
    HTTP = "HTTP"

