import dataclasses
from enum import Enum

class BundleTypeEnum(str, Enum):
    TAR = "tar"
    TGZ = "tgz"
    ZIP = "zip"
    YAML = "YAML"
    JSON = "JSON"

