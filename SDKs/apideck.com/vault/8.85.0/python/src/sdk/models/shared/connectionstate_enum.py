import dataclasses
from enum import Enum

class ConnectionStateEnum(str, Enum):
    AVAILABLE = "available"
    CALLABLE = "callable"
    ADDED = "added"
    AUTHORIZED = "authorized"

