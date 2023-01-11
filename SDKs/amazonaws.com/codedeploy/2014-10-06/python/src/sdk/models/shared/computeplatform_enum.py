import dataclasses
from enum import Enum

class ComputePlatformEnum(str, Enum):
    SERVER = "Server"
    LAMBDA = "Lambda"
    ECS = "ECS"

