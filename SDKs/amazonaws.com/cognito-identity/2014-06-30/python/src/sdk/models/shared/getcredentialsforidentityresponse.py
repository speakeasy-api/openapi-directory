import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import credentials as shared_credentials


@dataclass_json
@dataclasses.dataclass
class GetCredentialsForIdentityResponse:
    r"""GetCredentialsForIdentityResponse
    Returned in response to a successful <code>GetCredentialsForIdentity</code> operation.
    """
    
    credentials: Optional[shared_credentials.Credentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credentials') }})
    identity_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityId') }})
    
