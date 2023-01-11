import dataclasses
from typing import Optional
from ..shared import groupdetail as shared_groupdetail
from ..shared import managedpolicydetail as shared_managedpolicydetail
from ..shared import roledetail as shared_roledetail
from ..shared import userdetail as shared_userdetail


@dataclasses.dataclass
class GetAccountAuthorizationDetailsResponse:
    r"""GetAccountAuthorizationDetailsResponse
    Contains the response to a successful <a>GetAccountAuthorizationDetails</a> request. 
    """
    
    group_detail_list: Optional[list[shared_groupdetail.GroupDetail]] = dataclasses.field(default=None)
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    policies: Optional[list[shared_managedpolicydetail.ManagedPolicyDetail]] = dataclasses.field(default=None)
    role_detail_list: Optional[list[shared_roledetail.RoleDetail]] = dataclasses.field(default=None)
    user_detail_list: Optional[list[shared_userdetail.UserDetail]] = dataclasses.field(default=None)
    
