import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import newdevicemetadatatype as shared_newdevicemetadatatype


@dataclass_json
@dataclasses.dataclass
class AuthenticationResultType:
    r"""AuthenticationResultType
    The authentication result.
    """
    
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    expires_in: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpiresIn') }})
    id_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdToken') }})
    new_device_metadata: Optional[shared_newdevicemetadatatype.NewDeviceMetadataType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewDeviceMetadata') }})
    refresh_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RefreshToken') }})
    token_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TokenType') }})
    
