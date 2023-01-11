import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awssecurityfinding as shared_awssecurityfinding


@dataclass_json
@dataclasses.dataclass
class GetFindingsResponse:
    findings: list[shared_awssecurityfinding.AwsSecurityFinding] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Findings') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
