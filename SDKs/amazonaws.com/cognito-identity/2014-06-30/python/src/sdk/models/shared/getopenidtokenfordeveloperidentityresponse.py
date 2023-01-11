import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetOpenIDTokenForDeveloperIdentityResponse:
    r"""GetOpenIDTokenForDeveloperIdentityResponse
    Returned in response to a successful <code>GetOpenIdTokenForDeveloperIdentity</code> request.
    """
    
    identity_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityId') }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Token') }})
    
