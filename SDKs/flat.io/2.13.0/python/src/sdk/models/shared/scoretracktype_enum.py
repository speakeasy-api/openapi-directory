import dataclasses
from enum import Enum

class ScoreTrackTypeEnum(str, Enum):
    AUDIO = "audio"
    SOUNDCLOUD = "soundcloud"
    YOUTUBE = "youtube"
    VIMEO = "vimeo"

