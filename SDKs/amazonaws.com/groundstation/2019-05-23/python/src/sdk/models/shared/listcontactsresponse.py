import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactdata as shared_contactdata


@dataclass_json
@dataclasses.dataclass
class ListContactsResponse:
    r"""ListContactsResponse
    <p/>
    """
    
    contact_list: Optional[list[shared_contactdata.ContactData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
