import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authorizationdata as shared_authorizationdata


@dataclass_json
@dataclasses.dataclass
class GetAuthorizationTokenResponse:
    authorization_data: Optional[list[shared_authorizationdata.AuthorizationData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationData') }})
    
