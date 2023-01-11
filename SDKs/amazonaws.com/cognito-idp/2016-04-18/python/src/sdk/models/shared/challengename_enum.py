import dataclasses
from enum import Enum

class ChallengeNameEnum(str, Enum):
    PASSWORD = "Password"
    MFA = "Mfa"

