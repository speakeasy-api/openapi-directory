import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nfsmountoptions as shared_nfsmountoptions
from ..shared import onpremconfig as shared_onpremconfig
from ..shared import taglistentry as shared_taglistentry


@dataclass_json
@dataclasses.dataclass
class CreateLocationNfsRequest:
    r"""CreateLocationNfsRequest
    CreateLocationNfsRequest
    """
    
    on_prem_config: shared_onpremconfig.OnPremConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnPremConfig') }})
    server_hostname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerHostname') }})
    subdirectory: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subdirectory') }})
    mount_options: Optional[shared_nfsmountoptions.NfsMountOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MountOptions') }})
    tags: Optional[list[shared_taglistentry.TagListEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
