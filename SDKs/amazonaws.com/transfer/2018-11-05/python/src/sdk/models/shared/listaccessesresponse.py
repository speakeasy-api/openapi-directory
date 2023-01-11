import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listedaccess as shared_listedaccess


@dataclass_json
@dataclasses.dataclass
class ListAccessesResponse:
    accesses: list[shared_listedaccess.ListedAccess] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Accesses') }})
    server_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
