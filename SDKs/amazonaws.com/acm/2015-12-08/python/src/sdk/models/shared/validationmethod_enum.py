import dataclasses
from enum import Enum

class ValidationMethodEnum(str, Enum):
    EMAIL = "EMAIL"
    DNS = "DNS"

