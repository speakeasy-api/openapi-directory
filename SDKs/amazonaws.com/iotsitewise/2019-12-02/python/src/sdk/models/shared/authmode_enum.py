import dataclasses
from enum import Enum

class AuthModeEnum(str, Enum):
    IAM = "IAM"
    SSO = "SSO"

