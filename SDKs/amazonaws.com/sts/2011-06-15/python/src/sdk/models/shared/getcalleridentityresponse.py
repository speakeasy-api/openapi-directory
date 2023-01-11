import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetCallerIdentityResponse:
    r"""GetCallerIdentityResponse
    Contains the response to a successful <a>GetCallerIdentity</a> request, including information about the entity making the request.
    """
    
    account: Optional[str] = dataclasses.field(default=None)
    arn: Optional[str] = dataclasses.field(default=None)
    user_id: Optional[str] = dataclasses.field(default=None)
    
