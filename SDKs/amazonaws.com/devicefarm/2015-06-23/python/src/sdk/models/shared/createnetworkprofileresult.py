import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import networkprofile as shared_networkprofile


@dataclass_json
@dataclasses.dataclass
class CreateNetworkProfileResult:
    network_profile: Optional[shared_networkprofile.NetworkProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkProfile') }})
    
