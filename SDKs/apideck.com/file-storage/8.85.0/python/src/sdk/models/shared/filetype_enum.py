import dataclasses
from enum import Enum

class FileTypeEnum(str, Enum):
    FILE = "file"
    FOLDER = "folder"
    URL = "url"

