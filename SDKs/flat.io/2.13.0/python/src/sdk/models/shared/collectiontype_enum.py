import dataclasses
from enum import Enum

class CollectionTypeEnum(str, Enum):
    ROOT = "root"
    REGULAR = "regular"
    SHARED_WITH_ME = "sharedWithMe"
    SHARED_WITH_GROUP = "sharedWithGroup"
    TRASH = "trash"

