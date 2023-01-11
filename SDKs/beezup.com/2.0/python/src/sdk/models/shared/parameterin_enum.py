import dataclasses
from enum import Enum

class ParameterInEnum(str, Enum):
    PATH = "path"
    HEADER = "header"
    QUERY = "query"
    BODY = "body"
    FILE = "file"

