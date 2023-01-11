import dataclasses
from enum import Enum

class RecordTypeEnum(str, Enum):
    SRV = "SRV"
    A = "A"
    AAAA = "AAAA"
    CNAME = "CNAME"

