import dataclasses
from enum import Enum

class EventResponseTypeEnum(str, Enum):
    SUCCESS = "Success"
    FAILURE = "Failure"

