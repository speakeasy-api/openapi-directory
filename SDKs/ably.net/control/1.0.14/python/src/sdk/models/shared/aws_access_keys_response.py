import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AwsAccessKeysResponseAuthenticationModeEnum(str, Enum):
    CREDENTIALS = "credentials"


@dataclass_json
@dataclasses.dataclass
class AwsAccessKeysResponse:
    access_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessKeyId') }})
    authentication_mode: Optional[AwsAccessKeysResponseAuthenticationModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationMode') }})
    
