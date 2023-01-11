import dataclasses
from typing import Optional
from ..shared import instanceprofile as shared_instanceprofile


@dataclasses.dataclass
class ListInstanceProfilesResponse:
    r"""ListInstanceProfilesResponse
    Contains the response to a successful <a>ListInstanceProfiles</a> request. 
    """
    
    instance_profiles: list[shared_instanceprofile.InstanceProfile] = dataclasses.field()
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
