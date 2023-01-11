import dataclasses
from enum import Enum

class SortByEnum(str, Enum):
    NAME = "name"
    CREATED_ON = "createdOn"

