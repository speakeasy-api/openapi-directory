import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import agentconfiguration as shared_agentconfiguration


@dataclass_json
@dataclasses.dataclass
class ConfigureAgentResponse:
    r"""ConfigureAgentResponse
    The structure representing the configureAgentResponse.
    """
    
    configuration: shared_agentconfiguration.AgentConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    
