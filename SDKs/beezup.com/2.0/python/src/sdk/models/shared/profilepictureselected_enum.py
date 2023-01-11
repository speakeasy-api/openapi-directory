import dataclasses
from enum import Enum

class ProfilePictureSelectedEnum(str, Enum):
    GRAVATAR = "gravatar"
    INITIALS = "initials"
    UPLOADED = "uploaded"

