import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetCredentialsForIdentityInput:
    r"""GetCredentialsForIdentityInput
    Input to the <code>GetCredentialsForIdentity</code> action.
    """
    
    identity_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityId') }})
    custom_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomRoleArn') }})
    logins: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Logins') }})
    
