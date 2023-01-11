import dataclasses
from enum import Enum

class ComputePlatformEnum(str, Enum):
    DEFAULT = "Default"
    AWS_LAMBDA = "AWSLambda"

