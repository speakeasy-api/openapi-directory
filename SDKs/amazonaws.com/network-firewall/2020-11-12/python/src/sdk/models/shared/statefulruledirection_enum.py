import dataclasses
from enum import Enum

class StatefulRuleDirectionEnum(str, Enum):
    FORWARD = "FORWARD"
    ANY = "ANY"

