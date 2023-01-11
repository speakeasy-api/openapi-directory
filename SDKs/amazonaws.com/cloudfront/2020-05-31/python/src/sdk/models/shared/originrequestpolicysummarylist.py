import dataclasses
from enum import Enum
from ..shared import originrequestpolicy as shared_originrequestpolicy
from ..shared import originrequestpolicytype_enum as shared_originrequestpolicytype_enum


@dataclasses.dataclass
class OriginRequestPolicySummaryList:
    r"""OriginRequestPolicySummaryList
    Contains an origin request policy.
    """
    
    origin_request_policy: shared_originrequestpolicy.OriginRequestPolicy = dataclasses.field()
    type: shared_originrequestpolicytype_enum.OriginRequestPolicyTypeEnum = dataclasses.field()
    
