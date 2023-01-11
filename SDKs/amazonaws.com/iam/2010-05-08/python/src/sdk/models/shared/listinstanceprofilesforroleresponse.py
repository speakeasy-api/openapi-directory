import dataclasses
from typing import Optional
from ..shared import instanceprofile as shared_instanceprofile


@dataclasses.dataclass
class ListInstanceProfilesForRoleResponse:
    r"""ListInstanceProfilesForRoleResponse
    Contains the response to a successful <a>ListInstanceProfilesForRole</a> request. 
    """
    
    instance_profiles: list[shared_instanceprofile.InstanceProfile] = dataclasses.field()
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
