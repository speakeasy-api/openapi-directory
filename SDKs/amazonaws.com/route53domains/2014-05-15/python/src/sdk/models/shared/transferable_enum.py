import dataclasses
from enum import Enum

class TransferableEnum(str, Enum):
    TRANSFERABLE = "TRANSFERABLE"
    UNTRANSFERABLE = "UNTRANSFERABLE"
    DONT_KNOW = "DONT_KNOW"

