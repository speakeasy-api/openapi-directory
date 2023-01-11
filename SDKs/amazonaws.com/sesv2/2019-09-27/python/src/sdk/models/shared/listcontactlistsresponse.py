import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactlist as shared_contactlist


@dataclass_json
@dataclasses.dataclass
class ListContactListsResponse:
    contact_lists: Optional[list[shared_contactlist.ContactList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactLists') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
