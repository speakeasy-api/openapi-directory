import dataclasses
from enum import Enum

class SpeechMarkTypeEnum(str, Enum):
    SENTENCE = "sentence"
    SSML = "ssml"
    VISEME = "viseme"
    WORD = "word"

