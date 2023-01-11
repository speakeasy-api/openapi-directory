import dataclasses
from typing import Optional
from ..shared import sslpolicy as shared_sslpolicy


@dataclasses.dataclass
class DescribeSslPoliciesOutput:
    next_marker: Optional[str] = dataclasses.field(default=None)
    ssl_policies: Optional[list[shared_sslpolicy.SslPolicy]] = dataclasses.field(default=None)
    
