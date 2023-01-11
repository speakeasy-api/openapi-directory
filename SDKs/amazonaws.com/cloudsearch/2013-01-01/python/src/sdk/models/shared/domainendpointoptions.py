import dataclasses
from typing import Optional
from enum import Enum
from ..shared import tlssecuritypolicy_enum as shared_tlssecuritypolicy_enum


@dataclasses.dataclass
class DomainEndpointOptions:
    r"""DomainEndpointOptions
    The domain's endpoint options.
    """
    
    enforce_https: Optional[bool] = dataclasses.field(default=None)
    tls_security_policy: Optional[shared_tlssecuritypolicy_enum.TLSSecurityPolicyEnum] = dataclasses.field(default=None)
    
