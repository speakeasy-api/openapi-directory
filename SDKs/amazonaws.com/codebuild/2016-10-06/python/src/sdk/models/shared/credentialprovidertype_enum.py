import dataclasses
from enum import Enum

class CredentialProviderTypeEnum(str, Enum):
    SECRETS_MANAGER = "SECRETS_MANAGER"

