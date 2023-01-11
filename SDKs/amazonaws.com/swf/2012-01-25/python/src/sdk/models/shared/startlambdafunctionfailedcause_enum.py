import dataclasses
from enum import Enum

class StartLambdaFunctionFailedCauseEnum(str, Enum):
    ASSUME_ROLE_FAILED = "ASSUME_ROLE_FAILED"

