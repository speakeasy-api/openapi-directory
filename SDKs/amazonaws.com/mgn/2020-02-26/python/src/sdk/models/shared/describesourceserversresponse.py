import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sourceserver as shared_sourceserver


@dataclass_json
@dataclasses.dataclass
class DescribeSourceServersResponse:
    items: Optional[list[shared_sourceserver.SourceServer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
