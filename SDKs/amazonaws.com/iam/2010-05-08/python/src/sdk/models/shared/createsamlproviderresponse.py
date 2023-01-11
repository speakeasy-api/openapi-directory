import dataclasses
from typing import Optional
from ..shared import tag as shared_tag


@dataclasses.dataclass
class CreateSamlProviderResponse:
    r"""CreateSamlProviderResponse
    Contains the response to a successful <a>CreateSAMLProvider</a> request. 
    """
    
    saml_provider_arn: Optional[str] = dataclasses.field(default=None)
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)
    
