import dataclasses
from enum import Enum

class PayloadTypeEnum(str, Enum):
    STRING = "STRING"
    JSON = "JSON"

