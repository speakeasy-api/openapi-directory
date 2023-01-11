import dataclasses
from enum import Enum

class StatefulActionEnum(str, Enum):
    PASS = "PASS"
    DROP = "DROP"
    ALERT = "ALERT"

