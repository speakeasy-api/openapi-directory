import dataclasses
from enum import Enum

class ResponseFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"
    MSGPACK = "msgpack"
    HTML = "html"

