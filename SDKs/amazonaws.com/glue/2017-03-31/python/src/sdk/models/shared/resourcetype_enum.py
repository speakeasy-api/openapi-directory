import dataclasses
from enum import Enum

class ResourceTypeEnum(str, Enum):
    JAR = "JAR"
    FILE = "FILE"
    ARCHIVE = "ARCHIVE"

