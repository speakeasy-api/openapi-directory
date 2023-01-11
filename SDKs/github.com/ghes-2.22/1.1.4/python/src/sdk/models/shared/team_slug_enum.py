import dataclasses
from enum import Enum

class TeamSlugEnum(str, Enum):
    MEMBER = "member"
    MAINTAINER = "maintainer"
    ALL = "all"

