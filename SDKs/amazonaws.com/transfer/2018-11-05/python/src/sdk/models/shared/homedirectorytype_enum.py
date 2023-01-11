import dataclasses
from enum import Enum

class HomeDirectoryTypeEnum(str, Enum):
    PATH = "PATH"
    LOGICAL = "LOGICAL"

