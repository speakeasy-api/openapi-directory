import dataclasses
from enum import Enum

class DatasetActionTypeEnum(str, Enum):
    QUERY = "QUERY"
    CONTAINER = "CONTAINER"

