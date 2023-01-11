import dataclasses
from enum import Enum

class TypeEnum(str, Enum):
    CONVERSATION = "CONVERSATION"
    DICTATION = "DICTATION"

