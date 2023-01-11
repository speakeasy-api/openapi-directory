import dataclasses
from enum import Enum

class ProductViewSortByEnum(str, Enum):
    TITLE = "Title"
    VERSION_COUNT = "VersionCount"
    CREATION_DATE = "CreationDate"

