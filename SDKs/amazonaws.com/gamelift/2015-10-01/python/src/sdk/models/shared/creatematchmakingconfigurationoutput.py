import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import matchmakingconfiguration as shared_matchmakingconfiguration


@dataclass_json
@dataclasses.dataclass
class CreateMatchmakingConfigurationOutput:
    r"""CreateMatchmakingConfigurationOutput
    Represents the returned data in response to a request operation.
    """
    
    configuration: Optional[shared_matchmakingconfiguration.MatchmakingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configuration') }})
    
