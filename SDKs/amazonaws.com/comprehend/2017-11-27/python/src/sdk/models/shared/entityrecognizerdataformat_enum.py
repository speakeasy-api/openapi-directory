import dataclasses
from enum import Enum

class EntityRecognizerDataFormatEnum(str, Enum):
    COMPREHEND_CSV = "COMPREHEND_CSV"
    AUGMENTED_MANIFEST = "AUGMENTED_MANIFEST"

