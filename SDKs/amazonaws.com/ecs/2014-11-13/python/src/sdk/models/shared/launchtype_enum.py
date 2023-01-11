import dataclasses
from enum import Enum

class LaunchTypeEnum(str, Enum):
    EC2 = "EC2"
    FARGATE = "FARGATE"
    EXTERNAL = "EXTERNAL"

