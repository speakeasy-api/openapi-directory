import dataclasses
from enum import Enum

class BeezUpCommonColumnDataTypeEnum(str, Enum):
    STRING = "String"
    URL = "Url"
    TEXT = "Text"
    DECIMAL = "Decimal"
    DATE_TIME = "DateTime"
    INT = "Int"
    SPECIAL_INT = "SpecialInt"
    IN_STOCK = "InStock"
    UNKNOWN = "Unknown"
    IMAGE_URL = "ImageUrl"

