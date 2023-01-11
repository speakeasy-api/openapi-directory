import dataclasses
from enum import Enum

class AuthenticationTypeEnum(str, Enum):
    API = "API"
    SAML = "SAML"
    USERPOOL = "USERPOOL"

