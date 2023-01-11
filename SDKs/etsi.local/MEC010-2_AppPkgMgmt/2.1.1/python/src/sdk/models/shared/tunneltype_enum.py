import dataclasses
from enum import Enum

class TunnelTypeEnum(str, Enum):
    GTP_U = "GTP-U"
    GRE = "GRE"

