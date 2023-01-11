import dataclasses
from enum import Enum

class StatementTypeEnum(str, Enum):
    DDL = "DDL"
    DML = "DML"
    UTILITY = "UTILITY"

