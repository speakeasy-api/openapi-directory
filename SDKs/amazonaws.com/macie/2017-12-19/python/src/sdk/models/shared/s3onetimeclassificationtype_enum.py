import dataclasses
from enum import Enum

class S3OneTimeClassificationTypeEnum(str, Enum):
    FULL = "FULL"
    NONE = "NONE"

