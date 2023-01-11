import dataclasses
from enum import Enum

class DynamoKeyTypeEnum(str, Enum):
    STRING = "STRING"
    NUMBER = "NUMBER"

