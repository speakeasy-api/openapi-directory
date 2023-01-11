import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetContextKeysForPolicyResponse:
    r"""GetContextKeysForPolicyResponse
    Contains the response to a successful <a>GetContextKeysForPrincipalPolicy</a> or <a>GetContextKeysForCustomPolicy</a> request. 
    """
    
    context_key_names: Optional[list[str]] = dataclasses.field(default=None)
    
