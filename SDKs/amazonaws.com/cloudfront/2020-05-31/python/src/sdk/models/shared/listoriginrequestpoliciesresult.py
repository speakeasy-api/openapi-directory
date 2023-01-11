import dataclasses
from typing import Optional
from ..shared import originrequestpolicylist as shared_originrequestpolicylist


@dataclasses.dataclass
class ListOriginRequestPoliciesResult:
    origin_request_policy_list: Optional[shared_originrequestpolicylist.OriginRequestPolicyList] = dataclasses.field(default=None)
    
