import dataclasses
from enum import Enum

class OrderByDirectionEnum(str, Enum):
    ASCENDING = "Ascending"
    DESCENDING = "Descending"

