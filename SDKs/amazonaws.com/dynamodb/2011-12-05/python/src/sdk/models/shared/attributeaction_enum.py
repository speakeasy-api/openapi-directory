import dataclasses
from enum import Enum

class AttributeActionEnum(str, Enum):
    ADD = "ADD"
    PUT = "PUT"
    DELETE = "DELETE"

