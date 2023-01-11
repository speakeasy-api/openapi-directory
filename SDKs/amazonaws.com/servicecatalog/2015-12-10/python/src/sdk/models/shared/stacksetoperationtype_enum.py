import dataclasses
from enum import Enum

class StackSetOperationTypeEnum(str, Enum):
    CREATE = "CREATE"
    UPDATE = "UPDATE"
    DELETE = "DELETE"

