import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UnlinkDeveloperIdentityInput:
    r"""UnlinkDeveloperIdentityInput
    Input to the <code>UnlinkDeveloperIdentity</code> action.
    """
    
    developer_provider_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeveloperProviderName') }})
    developer_user_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeveloperUserIdentifier') }})
    identity_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityId') }})
    identity_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolId') }})
    
