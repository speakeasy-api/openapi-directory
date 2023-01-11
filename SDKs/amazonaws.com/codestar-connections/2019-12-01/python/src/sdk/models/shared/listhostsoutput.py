import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import host as shared_host


@dataclass_json
@dataclasses.dataclass
class ListHostsOutput:
    hosts: Optional[list[shared_host.Host]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hosts') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
