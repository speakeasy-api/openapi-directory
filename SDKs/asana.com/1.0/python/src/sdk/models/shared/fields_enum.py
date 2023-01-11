import dataclasses
from enum import Enum

class FieldsEnum(str, Enum):
    PORTFOLIO = "portfolio"
    PROJECT = "project"
    TAG = "tag"
    TASK = "task"
    USER = "user"

