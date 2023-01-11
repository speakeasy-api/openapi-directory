import dataclasses
from enum import Enum

class RuleTypeEnum(str, Enum):
    ATLEAST = "ATLEAST"
    AND = "AND"
    OR = "OR"

