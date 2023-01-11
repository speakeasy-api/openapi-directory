import dataclasses
from enum import Enum

class AssetTypeEnum(str, Enum):
    NOT_SET = "NotSet"
    IMAGE = "Image"
    FILM = "Film"
    MUSIC = "Music"

