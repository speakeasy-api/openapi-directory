import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grant as shared_grant


@dataclass_json
@dataclasses.dataclass
class ListDistributedGrantsResponse:
    grants: Optional[list[shared_grant.Grant]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Grants') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
