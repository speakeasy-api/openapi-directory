import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basicauthcredentials as shared_basicauthcredentials
from ..shared import oauthcredentials as shared_oauthcredentials


@dataclass_json
@dataclasses.dataclass
class SapoDataConnectorProfileCredentials:
    r"""SapoDataConnectorProfileCredentials
     The connector-specific profile credentials required when using SAPOData. 
    """
    
    basic_auth_credentials: Optional[shared_basicauthcredentials.BasicAuthCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAuthCredentials') }})
    o_auth_credentials: Optional[shared_oauthcredentials.OAuthCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oAuthCredentials') }})
    
