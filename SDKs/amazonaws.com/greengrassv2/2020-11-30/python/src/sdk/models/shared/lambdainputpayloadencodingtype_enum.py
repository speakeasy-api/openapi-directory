import dataclasses
from enum import Enum

class LambdaInputPayloadEncodingTypeEnum(str, Enum):
    JSON = "json"
    BINARY = "binary"

