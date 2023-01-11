import dataclasses
from typing import Optional
from enum import Enum
from ..shared import authenticationtype_enum as shared_authenticationtype_enum


@dataclasses.dataclass
class Authentication:
    r"""Authentication
    Indicates whether the user requires a password to authenticate.
    """
    
    password_count: Optional[int] = dataclasses.field(default=None)
    type: Optional[shared_authenticationtype_enum.AuthenticationTypeEnum] = dataclasses.field(default=None)
    
