import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oidcidentityproviderconfig as shared_oidcidentityproviderconfig


@dataclass_json
@dataclasses.dataclass
class IdentityProviderConfigResponse:
    r"""IdentityProviderConfigResponse
    The full description of your identity configuration.
    """
    
    oidc: Optional[shared_oidcidentityproviderconfig.OidcIdentityProviderConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidc') }})
    
