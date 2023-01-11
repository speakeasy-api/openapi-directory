import dataclasses
from enum import Enum

class AcceptTypeEnum(str, Enum):
    DELIVERED = "DELIVERED"
    READ = "READ"

