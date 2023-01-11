import dataclasses
from typing import Optional
from enum import Enum
from ..shared import verificationstatus_enum as shared_verificationstatus_enum


@dataclasses.dataclass
class IdentityVerificationAttributes:
    verification_status: Optional[shared_verificationstatus_enum.VerificationStatusEnum] = dataclasses.field(default=None)
    verification_token: Optional[str] = dataclasses.field(default=None)
    
