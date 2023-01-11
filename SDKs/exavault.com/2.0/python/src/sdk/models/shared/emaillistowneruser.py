import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import relationshipdata as shared_relationshipdata


@dataclass_json
@dataclasses.dataclass
class EmailListOwnerUser:
    r"""EmailListOwnerUser
    Information for user who owns the email list
    """
    
    data: Optional[shared_relationshipdata.RelationshipData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
