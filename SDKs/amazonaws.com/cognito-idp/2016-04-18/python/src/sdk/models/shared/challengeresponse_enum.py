import dataclasses
from enum import Enum

class ChallengeResponseEnum(str, Enum):
    SUCCESS = "Success"
    FAILURE = "Failure"

