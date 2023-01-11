import dataclasses
from enum import Enum

class JobTypeEnum(str, Enum):
    IMPORT = "Import"
    EXPORT = "Export"

