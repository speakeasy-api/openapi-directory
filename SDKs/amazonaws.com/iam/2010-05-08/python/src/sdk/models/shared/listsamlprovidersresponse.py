import dataclasses
from typing import Optional
from ..shared import samlproviderlistentry as shared_samlproviderlistentry


@dataclasses.dataclass
class ListSamlProvidersResponse:
    r"""ListSamlProvidersResponse
    Contains the response to a successful <a>ListSAMLProviders</a> request. 
    """
    
    saml_provider_list: Optional[list[shared_samlproviderlistentry.SamlProviderListEntry]] = dataclasses.field(default=None)
    
