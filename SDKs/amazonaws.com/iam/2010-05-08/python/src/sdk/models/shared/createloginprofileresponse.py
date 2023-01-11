import dataclasses
from ..shared import loginprofile as shared_loginprofile


@dataclasses.dataclass
class CreateLoginProfileResponse:
    r"""CreateLoginProfileResponse
    Contains the response to a successful <a>CreateLoginProfile</a> request. 
    """
    
    login_profile: shared_loginprofile.LoginProfile = dataclasses.field()
    
