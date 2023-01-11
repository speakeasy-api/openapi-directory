import dataclasses
from typing import Optional
from enum import Enum
from ..shared import authscheme_enum as shared_authscheme_enum
from ..shared import iamauthmode_enum as shared_iamauthmode_enum


@dataclasses.dataclass
class UserAuthConfigInfo:
    r"""UserAuthConfigInfo
    Returns the details of authentication used by a proxy to log in as a specific database user.
    """
    
    auth_scheme: Optional[shared_authscheme_enum.AuthSchemeEnum] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    iam_auth: Optional[shared_iamauthmode_enum.IamAuthModeEnum] = dataclasses.field(default=None)
    secret_arn: Optional[str] = dataclasses.field(default=None)
    user_name: Optional[str] = dataclasses.field(default=None)
    
