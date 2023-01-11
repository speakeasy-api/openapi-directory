import dataclasses
from enum import Enum

class AlertTypeEnum(str, Enum):
    SNS = "SNS"
    LAMBDA = "LAMBDA"

