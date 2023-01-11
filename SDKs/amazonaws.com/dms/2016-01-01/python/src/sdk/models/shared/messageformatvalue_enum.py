import dataclasses
from enum import Enum

class MessageFormatValueEnum(str, Enum):
    JSON = "json"
    JSON_UNFORMATTED = "json-unformatted"

