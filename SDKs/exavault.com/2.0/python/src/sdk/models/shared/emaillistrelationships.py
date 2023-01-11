import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import emaillistowneruser as shared_emaillistowneruser


@dataclass_json
@dataclasses.dataclass
class EmailListRelationships:
    r"""EmailListRelationships
    Related record summary info
    """
    
    owner_user: Optional[shared_emaillistowneruser.EmailListOwnerUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerUser') }})
    
