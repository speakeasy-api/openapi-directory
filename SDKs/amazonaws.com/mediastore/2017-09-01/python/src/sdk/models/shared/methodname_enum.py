import dataclasses
from enum import Enum

class MethodNameEnum(str, Enum):
    PUT = "PUT"
    GET = "GET"
    DELETE = "DELETE"
    HEAD = "HEAD"

