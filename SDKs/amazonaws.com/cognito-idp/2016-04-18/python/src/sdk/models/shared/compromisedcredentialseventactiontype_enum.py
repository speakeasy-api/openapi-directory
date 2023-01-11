import dataclasses
from enum import Enum

class CompromisedCredentialsEventActionTypeEnum(str, Enum):
    BLOCK = "BLOCK"
    NO_ACTION = "NO_ACTION"

