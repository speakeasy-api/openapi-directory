import dataclasses
from enum import Enum

class MessageFormatEnum(str, Enum):
    RAW = "RAW"
    JSON = "JSON"

