import dataclasses
from typing import Optional
from enum import Enum
from ..shared import verificationstatus_enum as shared_verificationstatus_enum


@dataclasses.dataclass
class IdentityDkimAttributes:
    dkim_enabled: Optional[bool] = dataclasses.field(default=None)
    dkim_tokens: Optional[list[str]] = dataclasses.field(default=None)
    dkim_verification_status: Optional[shared_verificationstatus_enum.VerificationStatusEnum] = dataclasses.field(default=None)
    
