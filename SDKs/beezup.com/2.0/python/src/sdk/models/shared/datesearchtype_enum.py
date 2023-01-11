import dataclasses
from enum import Enum

class DateSearchTypeEnum(str, Enum):
    MODIFICATION = "Modification"
    PURCHASE = "Purchase"
    MARKET_PLACE_MODIFICATION = "MarketPlaceModification"

