import dataclasses
from enum import Enum

class ConfigurationSourceEnum(str, Enum):
    REPOSITORY = "REPOSITORY"
    API = "API"

