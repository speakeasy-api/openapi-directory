import dataclasses
from ..shared import loginprofile as shared_loginprofile


@dataclasses.dataclass
class GetLoginProfileResponse:
    r"""GetLoginProfileResponse
    Contains the response to a successful <a>GetLoginProfile</a> request. 
    """
    
    login_profile: shared_loginprofile.LoginProfile = dataclasses.field()
    
