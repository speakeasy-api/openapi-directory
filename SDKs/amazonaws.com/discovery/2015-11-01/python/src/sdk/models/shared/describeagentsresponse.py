import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import agentinfo as shared_agentinfo


@dataclass_json
@dataclasses.dataclass
class DescribeAgentsResponse:
    agents_info: Optional[list[shared_agentinfo.AgentInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentsInfo') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
