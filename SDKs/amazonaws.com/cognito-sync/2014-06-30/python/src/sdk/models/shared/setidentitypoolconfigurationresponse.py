import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cognitostreams as shared_cognitostreams
from ..shared import pushsync as shared_pushsync


@dataclass_json
@dataclasses.dataclass
class SetIdentityPoolConfigurationResponse:
    r"""SetIdentityPoolConfigurationResponse
    The output for the SetIdentityPoolConfiguration operation
    """
    
    cognito_streams: Optional[shared_cognitostreams.CognitoStreams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CognitoStreams') }})
    identity_pool_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolId') }})
    push_sync: Optional[shared_pushsync.PushSync] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PushSync') }})
    
