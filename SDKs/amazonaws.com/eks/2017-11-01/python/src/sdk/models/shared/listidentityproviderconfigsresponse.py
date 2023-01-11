import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identityproviderconfig as shared_identityproviderconfig


@dataclass_json
@dataclasses.dataclass
class ListIdentityProviderConfigsResponse:
    identity_provider_configs: Optional[list[shared_identityproviderconfig.IdentityProviderConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityProviderConfigs') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
