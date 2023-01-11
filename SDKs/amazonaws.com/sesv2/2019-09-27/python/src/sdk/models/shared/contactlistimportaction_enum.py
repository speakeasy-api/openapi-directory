import dataclasses
from enum import Enum

class ContactListImportActionEnum(str, Enum):
    DELETE = "DELETE"
    PUT = "PUT"

