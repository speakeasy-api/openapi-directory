import dataclasses
from enum import Enum

class ImageTypeEnum(str, Enum):
    AMI = "AMI"
    DOCKER = "DOCKER"

