import dataclasses
from enum import Enum

class SuppressionListImportActionEnum(str, Enum):
    DELETE = "DELETE"
    PUT = "PUT"

