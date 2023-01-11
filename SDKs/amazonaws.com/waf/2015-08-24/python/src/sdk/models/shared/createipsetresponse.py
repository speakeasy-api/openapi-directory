import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ipset as shared_ipset


@dataclass_json
@dataclasses.dataclass
class CreateIPSetResponse:
    change_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    ip_set: Optional[shared_ipset.IPSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IPSet') }})
    
