import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetPrincipalTagAttributeMapInput:
    identity_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolId') }})
    identity_provider_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityProviderName') }})
    
