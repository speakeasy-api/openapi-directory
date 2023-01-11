import dataclasses
from enum import Enum

class PublicationTypeEnum(str, Enum):
    PUBLISH_PRODUCTS = "PublishProducts"
    PUBLISH_OFFERS = "PublishOffers"
    UNPUBLISH = "Unpublish"

