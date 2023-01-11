import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import agentversion as shared_agentversion


@dataclass_json
@dataclasses.dataclass
class DescribeAgentVersionsResult:
    r"""DescribeAgentVersionsResult
    Contains the response to a <code>DescribeAgentVersions</code> request.
    """
    
    agent_versions: Optional[list[shared_agentversion.AgentVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentVersions') }})
    
