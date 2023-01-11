import dataclasses
from enum import Enum

class CreativeVideoSortOrderEnum(str, Enum):
    BEST_MATCH = "best_match"
    MOST_POPULAR = "most_popular"
    NEWEST = "newest"
    RANDOM = "random"

