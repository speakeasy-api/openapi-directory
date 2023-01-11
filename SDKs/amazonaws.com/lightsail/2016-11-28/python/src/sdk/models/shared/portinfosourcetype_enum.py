import dataclasses
from enum import Enum

class PortInfoSourceTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    INSTANCE = "INSTANCE"
    NONE = "NONE"
    CLOSED = "CLOSED"

