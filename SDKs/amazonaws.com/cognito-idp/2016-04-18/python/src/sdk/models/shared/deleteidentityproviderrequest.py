import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteIdentityProviderRequest:
    provider_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderName') }})
    user_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    
