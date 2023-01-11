import dataclasses
from typing import Optional
from ..shared import credentials as shared_credentials
from ..shared import federateduser as shared_federateduser


@dataclasses.dataclass
class GetFederationTokenResponse:
    r"""GetFederationTokenResponse
    Contains the response to a successful <a>GetFederationToken</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests. 
    """
    
    credentials: Optional[shared_credentials.Credentials] = dataclasses.field(default=None)
    federated_user: Optional[shared_federateduser.FederatedUser] = dataclasses.field(default=None)
    packed_policy_size: Optional[int] = dataclasses.field(default=None)
    
