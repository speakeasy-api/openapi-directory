import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import invitation as shared_invitation


@dataclass_json
@dataclasses.dataclass
class GetMasterAccountResponse:
    master: Optional[shared_invitation.Invitation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Master') }})
    
