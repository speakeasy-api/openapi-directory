import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clientauthenticationtype_enum as shared_clientauthenticationtype_enum


@dataclass_json
@dataclasses.dataclass
class DisableClientAuthenticationRequest:
    directory_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    type: shared_clientauthenticationtype_enum.ClientAuthenticationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
