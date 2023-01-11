import dataclasses
from enum import Enum

class SubtitleFormatEnum(str, Enum):
    VTT = "vtt"
    SRT = "srt"

