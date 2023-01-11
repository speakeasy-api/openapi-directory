import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import matchmakingconfiguration as shared_matchmakingconfiguration


@dataclass_json
@dataclasses.dataclass
class UpdateMatchmakingConfigurationOutput:
    r"""UpdateMatchmakingConfigurationOutput
    Represents the returned data in response to a request operation.
    """
    
    configuration: Optional[shared_matchmakingconfiguration.MatchmakingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configuration') }})
    
