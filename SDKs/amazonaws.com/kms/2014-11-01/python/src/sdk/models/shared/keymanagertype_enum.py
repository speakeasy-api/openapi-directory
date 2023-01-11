import dataclasses
from enum import Enum

class KeyManagerTypeEnum(str, Enum):
    AWS = "AWS"
    CUSTOMER = "CUSTOMER"

