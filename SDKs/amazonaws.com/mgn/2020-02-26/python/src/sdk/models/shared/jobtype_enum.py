import dataclasses
from enum import Enum

class JobTypeEnum(str, Enum):
    LAUNCH = "LAUNCH"
    TERMINATE = "TERMINATE"

