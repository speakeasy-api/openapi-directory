import dataclasses
from enum import Enum

class SharedResourceSortByTypeEnum(str, Enum):
    ARN = "ARN"
    MODIFIED_TIME = "MODIFIED_TIME"

