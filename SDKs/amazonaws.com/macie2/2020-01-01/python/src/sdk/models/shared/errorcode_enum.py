import dataclasses
from enum import Enum

class ErrorCodeEnum(str, Enum):
    CLIENT_ERROR = "ClientError"
    INTERNAL_ERROR = "InternalError"

