import dataclasses
from enum import Enum

class ChannelRoleEnum(str, Enum):
    MASTER = "MASTER"
    VIEWER = "VIEWER"

