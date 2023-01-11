import dataclasses
from enum import Enum

class CompressionFormatStrategyEnum(str, Enum):
    NONE = "None"
    ZIP = "Zip"
    TAR_GZ = "TarGz"
    GZIP = "Gzip"
    BZIP2 = "Bzip2"
    RAR = "Rar"

