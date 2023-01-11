import dataclasses
from enum import Enum

class FeedTypeEnum(str, Enum):
    PRODUCTS = "Products"
    INVENTORY = "Inventory"
    PRICING = "Pricing"
    IMAGES = "Images"
    RELATIONSHIPS = "Relationships"
    UNPUBLISH = "Unpublish"
    OFFERS = "Offers"

