import dataclasses
from enum import Enum

class RecipeOutputFormatEnum(str, Enum):
    JSON = "JSON"
    YAML = "YAML"

