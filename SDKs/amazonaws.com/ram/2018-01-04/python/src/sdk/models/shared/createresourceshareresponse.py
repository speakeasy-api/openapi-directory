import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceshare as shared_resourceshare


@dataclass_json
@dataclasses.dataclass
class CreateResourceShareResponse:
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    resource_share: Optional[shared_resourceshare.ResourceShare] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceShare') }})
    
