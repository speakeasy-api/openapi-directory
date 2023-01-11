import dataclasses
from enum import Enum

class HTTPMethodEnum(str, Enum):
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    DELETE = "DELETE"
    PUT = "PUT"
    HEAD = "HEAD"

