import dataclasses
from enum import Enum

class PreserveDeletedFilesEnum(str, Enum):
    PRESERVE = "PRESERVE"
    REMOVE = "REMOVE"

