import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oauthproperties as shared_oauthproperties


@dataclass_json
@dataclasses.dataclass
class SapoDataConnectorProfileProperties:
    r"""SapoDataConnectorProfileProperties
     The connector-specific profile properties required when using SAPOData. 
    """
    
    application_host_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationHostUrl') }})
    application_service_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationServicePath') }})
    client_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientNumber') }})
    port_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portNumber') }})
    logon_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logonLanguage') }})
    o_auth_properties: Optional[shared_oauthproperties.OAuthProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oAuthProperties') }})
    private_link_service_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateLinkServiceName') }})
    
