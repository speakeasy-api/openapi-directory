import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OAuthProperties:
    r"""OAuthProperties
     The OAuth properties required for OAuth type authentication. 
    """
    
    auth_code_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authCodeUrl') }})
    o_auth_scopes: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('oAuthScopes') }})
    token_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenUrl') }})
    
