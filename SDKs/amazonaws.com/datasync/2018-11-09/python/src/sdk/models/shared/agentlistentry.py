import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import agentstatus_enum as shared_agentstatus_enum


@dataclass_json
@dataclasses.dataclass
class AgentListEntry:
    r"""AgentListEntry
    Represents a single entry in a list of agents. <code>AgentListEntry</code> returns an array that contains a list of agents when the <a href=\"https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html\">ListAgents</a> operation is called.
    """
    
    agent_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentArn') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    status: Optional[shared_agentstatus_enum.AgentStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
