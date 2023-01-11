import dataclasses
from typing import Optional
from ..shared import originrequestpolicyconfig as shared_originrequestpolicyconfig


@dataclasses.dataclass
class GetOriginRequestPolicyConfigResult:
    origin_request_policy_config: Optional[shared_originrequestpolicyconfig.OriginRequestPolicyConfig] = dataclasses.field(default=None)
    
