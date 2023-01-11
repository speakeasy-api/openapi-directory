import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import smbmountoptions as shared_smbmountoptions
from ..shared import taglistentry as shared_taglistentry


@dataclass_json
@dataclasses.dataclass
class CreateLocationSmbRequest:
    r"""CreateLocationSmbRequest
    CreateLocationSmbRequest
    """
    
    agent_arns: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentArns') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    server_hostname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerHostname') }})
    subdirectory: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subdirectory') }})
    user: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    mount_options: Optional[shared_smbmountoptions.SmbMountOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MountOptions') }})
    tags: Optional[list[shared_taglistentry.TagListEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
