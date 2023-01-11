import dataclasses
from enum import Enum

class WriteOperationTypeEnum(str, Enum):
    INSERT = "INSERT"
    UPSERT = "UPSERT"
    UPDATE = "UPDATE"

