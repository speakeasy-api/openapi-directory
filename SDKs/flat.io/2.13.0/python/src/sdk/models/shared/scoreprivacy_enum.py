import dataclasses
from enum import Enum

class ScorePrivacyEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"
    ORGANIZATION_PUBLIC = "organizationPublic"
    PRIVATE_LINK = "privateLink"

