import dataclasses
from enum import Enum

class PlatformCapabilityEnum(str, Enum):
    EC2 = "EC2"
    FARGATE = "FARGATE"

