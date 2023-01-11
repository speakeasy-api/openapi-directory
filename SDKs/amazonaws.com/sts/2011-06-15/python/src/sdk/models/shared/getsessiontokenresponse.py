import dataclasses
from typing import Optional
from ..shared import credentials as shared_credentials


@dataclasses.dataclass
class GetSessionTokenResponse:
    r"""GetSessionTokenResponse
    Contains the response to a successful <a>GetSessionToken</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests. 
    """
    
    credentials: Optional[shared_credentials.Credentials] = dataclasses.field(default=None)
    
