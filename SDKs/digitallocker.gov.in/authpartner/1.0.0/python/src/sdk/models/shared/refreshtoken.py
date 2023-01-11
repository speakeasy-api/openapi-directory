import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RefreshTokenGrantTypeEnum(str, Enum):
    REFRESH_TOKEN = "refresh_token"


@dataclass_json
@dataclasses.dataclass
class RefreshToken:
    client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    client_secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_secret') }})
    grant_type: RefreshTokenGrantTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grant_type') }})
    refresh_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('refresh_token') }})
    
