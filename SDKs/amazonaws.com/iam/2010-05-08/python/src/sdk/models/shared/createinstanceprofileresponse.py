import dataclasses
from ..shared import instanceprofile as shared_instanceprofile


@dataclasses.dataclass
class CreateInstanceProfileResponse:
    r"""CreateInstanceProfileResponse
    Contains the response to a successful <a>CreateInstanceProfile</a> request. 
    """
    
    instance_profile: shared_instanceprofile.InstanceProfile = dataclasses.field()
    
