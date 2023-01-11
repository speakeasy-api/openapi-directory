import dataclasses
from enum import Enum

class CustomPluginContentTypeEnum(str, Enum):
    JAR = "JAR"
    ZIP = "ZIP"

