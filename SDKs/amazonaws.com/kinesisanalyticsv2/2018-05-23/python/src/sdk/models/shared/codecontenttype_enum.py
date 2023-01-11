import dataclasses
from enum import Enum

class CodeContentTypeEnum(str, Enum):
    PLAINTEXT = "PLAINTEXT"
    ZIPFILE = "ZIPFILE"

