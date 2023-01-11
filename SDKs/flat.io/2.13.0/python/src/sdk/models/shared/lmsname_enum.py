import dataclasses
from enum import Enum

class LmsNameEnum(str, Enum):
    CANVAS = "canvas"
    MOODLE = "moodle"
    SCHOOLOGY = "schoology"
    BLACKBOARD = "blackboard"
    DESIRE2LEARN = "desire2learn"
    SAKAI = "sakai"
    SCHOOLBOX = "schoolbox"
    OTHER = "other"

