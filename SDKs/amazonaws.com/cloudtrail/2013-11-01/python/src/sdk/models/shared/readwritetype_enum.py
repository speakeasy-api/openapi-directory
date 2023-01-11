import dataclasses
from enum import Enum

class ReadWriteTypeEnum(str, Enum):
    READ_ONLY = "ReadOnly"
    WRITE_ONLY = "WriteOnly"
    ALL = "All"

