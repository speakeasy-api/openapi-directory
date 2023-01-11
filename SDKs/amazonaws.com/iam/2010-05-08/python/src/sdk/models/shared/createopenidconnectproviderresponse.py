import dataclasses
from typing import Optional
from ..shared import tag as shared_tag


@dataclasses.dataclass
class CreateOpenIDConnectProviderResponse:
    r"""CreateOpenIDConnectProviderResponse
    Contains the response to a successful <a>CreateOpenIDConnectProvider</a> request. 
    """
    
    open_id_connect_provider_arn: Optional[str] = dataclasses.field(default=None)
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)
    
