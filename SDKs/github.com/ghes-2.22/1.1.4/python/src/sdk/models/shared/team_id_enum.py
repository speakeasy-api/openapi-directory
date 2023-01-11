import dataclasses
from enum import Enum

class TeamIDEnum(str, Enum):
    MEMBER = "member"
    MAINTAINER = "maintainer"
    ALL = "all"

