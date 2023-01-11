import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import emaillist as shared_emaillist
from ..shared import user as shared_user


@dataclass_json
@dataclasses.dataclass
class EmailListResponse:
    r"""EmailListResponse
    Response object for a single email list.
    """
    
    data: Optional[shared_emaillist.EmailList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    included: Optional[list[shared_user.User]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('included') }})
    response_status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseStatus') }})
    
