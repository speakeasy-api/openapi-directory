import dataclasses
from enum import Enum

class DataCatalogTypeEnum(str, Enum):
    LAMBDA = "LAMBDA"
    GLUE = "GLUE"
    HIVE = "HIVE"

