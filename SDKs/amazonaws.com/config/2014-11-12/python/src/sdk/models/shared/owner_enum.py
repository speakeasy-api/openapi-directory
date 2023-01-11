import dataclasses
from enum import Enum

class OwnerEnum(str, Enum):
    CUSTOM_LAMBDA = "CUSTOM_LAMBDA"
    AWS = "AWS"

