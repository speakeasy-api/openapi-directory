import dataclasses
from ..shared import instanceprofile as shared_instanceprofile


@dataclasses.dataclass
class GetInstanceProfileResponse:
    r"""GetInstanceProfileResponse
    Contains the response to a successful <a>GetInstanceProfile</a> request. 
    """
    
    instance_profile: shared_instanceprofile.InstanceProfile = dataclasses.field()
    
