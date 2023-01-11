import dataclasses
from enum import Enum

class AugmentedManifestsDocumentTypeFormatEnum(str, Enum):
    PLAIN_TEXT_DOCUMENT = "PLAIN_TEXT_DOCUMENT"
    SEMI_STRUCTURED_DOCUMENT = "SEMI_STRUCTURED_DOCUMENT"

