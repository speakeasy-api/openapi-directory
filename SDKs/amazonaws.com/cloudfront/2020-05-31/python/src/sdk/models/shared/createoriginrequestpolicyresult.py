import dataclasses
from typing import Optional
from ..shared import originrequestpolicy as shared_originrequestpolicy


@dataclasses.dataclass
class CreateOriginRequestPolicyResult:
    origin_request_policy: Optional[shared_originrequestpolicy.OriginRequestPolicy] = dataclasses.field(default=None)
    
