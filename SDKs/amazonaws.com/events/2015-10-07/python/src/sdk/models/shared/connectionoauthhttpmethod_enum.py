import dataclasses
from enum import Enum

class ConnectionOAuthHTTPMethodEnum(str, Enum):
    GET = "GET"
    POST = "POST"
    PUT = "PUT"

