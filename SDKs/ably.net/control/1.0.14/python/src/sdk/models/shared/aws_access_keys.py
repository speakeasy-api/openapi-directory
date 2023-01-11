import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AwsAccessKeysAuthenticationModeEnum(str, Enum):
    CREDENTIALS = "credentials"


@dataclass_json
@dataclasses.dataclass
class AwsAccessKeys:
    access_key_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessKeyId') }})
    secret_access_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretAccessKey') }})
    authentication_mode: Optional[AwsAccessKeysAuthenticationModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationMode') }})
    
