import dataclasses
from enum import Enum

class TextTypeEnum(str, Enum):
    SSML = "ssml"
    TEXT = "text"

