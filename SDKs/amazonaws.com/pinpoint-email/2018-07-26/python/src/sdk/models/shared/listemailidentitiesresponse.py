import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identityinfo as shared_identityinfo


@dataclass_json
@dataclasses.dataclass
class ListEmailIdentitiesResponse:
    r"""ListEmailIdentitiesResponse
    A list of all of the identities that you've attempted to verify for use with Amazon Pinpoint, regardless of whether or not those identities were successfully verified.
    """
    
    email_identities: Optional[list[shared_identityinfo.IdentityInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailIdentities') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
