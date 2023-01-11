import dataclasses
from enum import Enum

class TeamIDEnum1(str, Enum):
    MEMBER = "member"
    MAINTAINER = "maintainer"
    ALL = "all"

