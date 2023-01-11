import dataclasses
from enum import Enum

class AzStatusEnum(str, Enum):
    SINGLEAZ = "singleaz"
    MULTIAZ = "multiaz"

