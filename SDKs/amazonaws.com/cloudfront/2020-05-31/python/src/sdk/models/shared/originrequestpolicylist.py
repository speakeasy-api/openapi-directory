import dataclasses
from typing import Optional
from ..shared import originrequestpolicysummarylist as shared_originrequestpolicysummarylist


@dataclasses.dataclass
class OriginRequestPolicyList:
    r"""OriginRequestPolicyList
    A list of origin request policies.
    """
    
    max_items: int = dataclasses.field()
    quantity: int = dataclasses.field()
    items: Optional[list[shared_originrequestpolicysummarylist.OriginRequestPolicySummaryList]] = dataclasses.field(default=None)
    next_marker: Optional[str] = dataclasses.field(default=None)
    
