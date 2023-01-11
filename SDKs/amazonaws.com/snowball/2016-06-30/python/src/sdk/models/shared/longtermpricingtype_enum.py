import dataclasses
from enum import Enum

class LongTermPricingTypeEnum(str, Enum):
    ONE_YEAR = "OneYear"
    THREE_YEAR = "ThreeYear"

