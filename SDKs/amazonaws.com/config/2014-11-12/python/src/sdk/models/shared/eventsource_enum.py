import dataclasses
from enum import Enum

class EventSourceEnum(str, Enum):
    AWS_CONFIG = "aws.config"

