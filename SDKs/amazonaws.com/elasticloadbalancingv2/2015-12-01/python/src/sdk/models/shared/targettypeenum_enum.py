import dataclasses
from enum import Enum

class TargetTypeEnumEnum(str, Enum):
    INSTANCE = "instance"
    IP = "ip"
    LAMBDA = "lambda"

