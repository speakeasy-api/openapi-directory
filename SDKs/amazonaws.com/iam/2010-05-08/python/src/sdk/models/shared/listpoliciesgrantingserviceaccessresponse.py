import dataclasses
from typing import Optional
from ..shared import listpoliciesgrantingserviceaccessentry as shared_listpoliciesgrantingserviceaccessentry


@dataclasses.dataclass
class ListPoliciesGrantingServiceAccessResponse:
    policies_granting_service_access: list[shared_listpoliciesgrantingserviceaccessentry.ListPoliciesGrantingServiceAccessEntry] = dataclasses.field()
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
