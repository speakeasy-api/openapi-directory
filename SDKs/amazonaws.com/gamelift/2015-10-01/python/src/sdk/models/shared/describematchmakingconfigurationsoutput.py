import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import matchmakingconfiguration as shared_matchmakingconfiguration


@dataclass_json
@dataclasses.dataclass
class DescribeMatchmakingConfigurationsOutput:
    r"""DescribeMatchmakingConfigurationsOutput
    Represents the returned data in response to a request operation.
    """
    
    configurations: Optional[list[shared_matchmakingconfiguration.MatchmakingConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configurations') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
