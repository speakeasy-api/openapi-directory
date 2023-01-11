import dataclasses
from enum import Enum

class CostTypeEnum(str, Enum):
    CPC_GLOBAL = "CPC_Global"
    CPA_GLOBAL = "CPA_Global"
    CPC_BY_CATEGORY = "CPC_ByCategory"
    CPA_BY_CATEGORY = "CPA_ByCategory"
    FIXED_GLOBAL = "Fixed_Global"

