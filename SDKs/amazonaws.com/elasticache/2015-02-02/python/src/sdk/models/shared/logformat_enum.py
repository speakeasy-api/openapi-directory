import dataclasses
from enum import Enum

class LogFormatEnum(str, Enum):
    TEXT = "text"
    JSON = "json"

