import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sessioncontext as shared_sessioncontext


@dataclass_json
@dataclasses.dataclass
class FederatedUser:
    r"""FederatedUser
    Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the GetFederationToken operation of the Security Token Service (STS) API.
    """
    
    access_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessKeyId') }})
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    principal_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principalId') }})
    session_context: Optional[shared_sessioncontext.SessionContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionContext') }})
    
