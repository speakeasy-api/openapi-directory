import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identityproviderconfigresponse as shared_identityproviderconfigresponse


@dataclass_json
@dataclasses.dataclass
class DescribeIdentityProviderConfigResponse:
    identity_provider_config: Optional[shared_identityproviderconfigresponse.IdentityProviderConfigResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityProviderConfig') }})
    
