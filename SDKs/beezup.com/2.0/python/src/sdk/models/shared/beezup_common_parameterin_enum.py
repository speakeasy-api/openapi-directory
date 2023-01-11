import dataclasses
from enum import Enum

class BeezUpCommonParameterInEnum(str, Enum):
    PATH = "path"
    HEADER = "header"
    QUERY = "query"
    BODY = "body"

