import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import agentpreview as shared_agentpreview


@dataclass_json
@dataclasses.dataclass
class PreviewAgentsResponse:
    agent_previews: list[shared_agentpreview.AgentPreview] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentPreviews') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
