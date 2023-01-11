import dataclasses
from enum import Enum

class LinkClickToOrderTypeEnum(str, Enum):
    ON_PURCHASE_DATE = "OnPurchaseDate"
    ON_CLICK_DATE = "OnClickDate"

