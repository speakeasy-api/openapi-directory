import dataclasses
from enum import Enum

class Icd10CmRelationshipTypeEnum(str, Enum):
    OVERLAP = "OVERLAP"
    SYSTEM_ORGAN_SITE = "SYSTEM_ORGAN_SITE"

