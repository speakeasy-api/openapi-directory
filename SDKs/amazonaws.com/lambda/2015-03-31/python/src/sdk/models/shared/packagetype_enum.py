import dataclasses
from enum import Enum

class PackageTypeEnum(str, Enum):
    ZIP = "Zip"
    IMAGE = "Image"

