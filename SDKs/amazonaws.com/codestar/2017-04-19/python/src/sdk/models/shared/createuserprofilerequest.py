import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateUserProfileRequest:
    display_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email_address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    user_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userArn') }})
    ssh_public_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshPublicKey') }})
    
