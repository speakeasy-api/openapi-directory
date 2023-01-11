import dataclasses
from enum import Enum

class OrgEnum2(str, Enum):
    TWOFA_DISABLED = "2fa_disabled"
    ALL = "all"

