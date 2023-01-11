import dataclasses
from enum import Enum

class TargetDbTypeEnum(str, Enum):
    SPECIFIC_DATABASE = "specific-database"
    MULTIPLE_DATABASES = "multiple-databases"

