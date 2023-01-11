import dataclasses
from typing import Optional
from ..shared import openidconnectproviderlistentry as shared_openidconnectproviderlistentry


@dataclasses.dataclass
class ListOpenIDConnectProvidersResponse:
    r"""ListOpenIDConnectProvidersResponse
    Contains the response to a successful <a>ListOpenIDConnectProviders</a> request. 
    """
    
    open_id_connect_provider_list: Optional[list[shared_openidconnectproviderlistentry.OpenIDConnectProviderListEntry]] = dataclasses.field(default=None)
    
