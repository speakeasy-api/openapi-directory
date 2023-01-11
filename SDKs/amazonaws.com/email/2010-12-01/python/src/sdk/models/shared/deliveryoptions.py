import dataclasses
from typing import Optional
from enum import Enum
from ..shared import tlspolicy_enum as shared_tlspolicy_enum


@dataclasses.dataclass
class DeliveryOptions:
    r"""DeliveryOptions
    Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
    """
    
    tls_policy: Optional[shared_tlspolicy_enum.TLSPolicyEnum] = dataclasses.field(default=None)
    
