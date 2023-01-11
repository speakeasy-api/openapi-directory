import dataclasses
from enum import Enum

class UnitPriceTypeEnum(str, Enum):
    GROSS = "gross"
    NET = "net"

