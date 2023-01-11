import dataclasses
from enum import Enum

class OutputFormatEnum(str, Enum):
    JSON = "JSON"
    YAML = "YAML"

