import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesspreviewfinding as shared_accesspreviewfinding


@dataclass_json
@dataclasses.dataclass
class ListAccessPreviewFindingsResponse:
    findings: list[shared_accesspreviewfinding.AccessPreviewFinding] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('findings') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
