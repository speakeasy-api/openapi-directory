import dataclasses
from enum import Enum

class MinimumProtocolVersionEnum(str, Enum):
    SS_LV3 = "SSLv3"
    TL_SV1 = "TLSv1"

