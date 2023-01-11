import dataclasses
from enum import Enum

class AssetFamilyEnum(str, Enum):
    NOT_SET = "NotSet"
    EDITORIAL = "Editorial"
    CREATIVE = "Creative"
    BOTH = "Both"

